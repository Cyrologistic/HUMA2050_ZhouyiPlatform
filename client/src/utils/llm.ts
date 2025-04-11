import axios from 'axios';
import { Hexagram } from '../types/iching';

interface GenerateInterpretationParams {
  question: string;
  hexagram: Hexagram;
  changingLineInterpretations: string[];
}


export const generateInterpretation = async ({
  question,
  hexagram,
  changingLineInterpretations,
}: GenerateInterpretationParams): Promise<string> => {
  const apiKey = import.meta.env.VITE_DEEPSEEK_R1_ZERO;
  if (!apiKey) {
    throw new Error('API key is not defined in environment variables.');
  }

  // TODO: Prompt for the LLM
  const prompt = `
  #身份： 你是一個精通周易算卦的占卜師。你擅長通過問卦人的問題，結合銅幣擲出的卦象，來解讀周易的卦辭和爻辭。你會根據問卦人的問題，給出一個詳細的解讀，並且提供一些建議。
  ##任務： 根據問卦人的問題，結合銅幣擲出的卦象，來解讀周易的卦辭和爻辭。你會根據問卦人的問題，給出一個詳細的解讀，並且提供一些建議。
  ###輸入格式： JSON格式,如下:
  {
    "question": "問卦人的問題",
    "hexagram": {
      "number": 卦象的數字,
      "name": 卦名的英文,
      "description": 卦辭,    
      "lines": string[6], "young_yin" | "young_yang" | "old_yin" | "old_yang",
      "chineseName": 卦名,
    },
    "changingLineInterpretations": [
      卦象對應的變爻的爻辭,可為0-6個
    ]
  }
  #### 注意事項： 
  - 不可從網上即時獲取資料，請根據你已有的知識來解讀卦辭和爻辭。
  - 你可以使用周易的經典文獻，如《周易》、《周易正義》等，來幫助你解讀卦辭和爻辭。
  - 不要有"問卦人詢問"的字眼。
  - interpretation 以"卦象"開頭，然後是卦辭的內容，然後是爻辭的內容，最後是建議的內容。
  - 輸出必須是有效的 JSON 格式，且不得包含多餘的換行符或格式化字符（例如 \\n、\\t)。請確保輸出是一個單行的 JSON 字符串。
  - 不要在 interpretation 內容中使用 Markdown 格式（例如 **加粗** 或 *斜體*），所有文字應為純文本。
  
  ### 輸出格式： JSON格式如下,請一定遵循這個格式:
  {
    "interpretation": "解讀的內容+建議",
  }

  #### 輸出示例：
  {
    "interpretation": "卦象為「頤」卦，卦辭為「貞吉。觀頤，自求口實。」這意味著..."
  }
  `;

  // TODO: Input
  const input = `
  {
    "question": "${question}",
    "hexagram": {
        "number": ${hexagram.number},
        "name": "${hexagram.name}",
        "description": "${hexagram.description}",
        "lines": ${JSON.stringify(hexagram.lines)},
        "chineseName": "${hexagram.chineseName}",
    },
    "changingLineInterpretations": [
    ${changingLineInterpretations
        .map((interpretation) => `"${interpretation}"`)
        .join(',')}
    ]
  }
  `;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'deepseek/deepseek-r1-zero:free',
        messages: [
          { role: 'system', content: prompt },
          { role: 'user', content: input },
        ],
        max_tokens: 4096,
        temperature: 0.3,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // let interpretation = response.data.choices[0].message.content.trim();

    // interpretation = interpretation.replace("\\boxed{\n", '');
    // interpretation = interpretation.substring(0, interpretation.length - 1);
    // interpretation = interpretation.replace("*", "");
    // interpretation = interpretation.replace("**", "");
    // interpretation = interpretation.replace(/[\r|\n|\t]/g,"")
    // interpretation = interpretation.replace("\n", "");
    // interpretation = interpretation.replace("\n\n", "");
    // interpretation = interpretation.replace("\\\\n", "");
    // interpretation = interpretation.replace("\r", "");
    // interpretation = interpretation.replace("\t", "");

    // let parsedResponse = JSON.stringify(interpretation);
    // parsedResponse = parsedResponse.replace("*", "");
    // parsedResponse = parsedResponse.replace("**", "");
    // parsedResponse = parsedResponse.replace(/[\r|\n|\t]/g,"")
    // parsedResponse = parsedResponse.replace("\n", "");
    // parsedResponse = parsedResponse.replace("\n\n", "");
    // parsedResponse = parsedResponse.replace("\\\\n", "");
    // parsedResponse = parsedResponse.replace("\r", "");
    // parsedResponse = parsedResponse.replace("\t", "");
    // parsedResponse = parsedResponse.replace("{", "");
    // parsedResponse = parsedResponse.replace("}", "");
    // parsedResponse = parsedResponse.replace("\"interpretation\":", "");
    // parsedResponse = parsedResponse.replace("\"", "");

    let interpretation = response.data.choices[0].message.content.trim().replace("\\boxed","");

    console.log('Raw LLM response:', interpretation);

    // Attempt to parse the response as JSON
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(interpretation);
    } catch (error) {
      console.error('Failed to parse LLM response as JSON:', error);
      // If parsing fails, assume the response is a plain text string and clean it
      interpretation = interpretation
        .replace(/\\boxed\{.*?\}/g, '') // Remove LaTeX boxed formatting
        .replace(/[\r\n\t]+/g, ' ') // Replace newlines, carriage returns, and tabs with a single space
        .replace(/\s+/g, ' ') // Collapse multiple spaces into a single space
        .replace(/[*]+/g, '') // Remove asterisks (e.g., *, **)
        .trim();

      // Wrap the cleaned string in the expected JSON structure
      parsedResponse = { interpretation };
    }

    console.log('Parsed response:', parsedResponse);

    if (parsedResponse.interpretation) {
      return parsedResponse.interpretation;
    } else {
      throw new Error('Interpretation field not found in LLM response.');
    }
  } catch (error) {
    console.error('Error calling API:', error);
    throw new Error('Failed to generate interpretation from LLM.');
  }
};