import axios from 'axios';
import { Hexagram } from '../types/iching';

interface GenerateInterpretationParams {
  question: string;
  hexagram: Hexagram;
  changingLineInterpretations: string[];
  secondaryHexagram: Hexagram | null;
}

const sanitizingOutput = (llm_output: string): any => {
  // Count number of { and } in the string
  const leftBracesCount = (llm_output.match(/{/g) || []).length;
  const rightBracesCount = (llm_output.match(/}/g) || []).length;
  let sanitizedOutput = "";
  // Normally should be equal
  if (leftBracesCount === rightBracesCount) {
    // Remove first { and last } and parse the output as JSON
    sanitizedOutput = llm_output.replace(/^\{/, '').replace(/\}$/, '');
    // Parse the output as JSON
    return JSON.parse(llm_output);
  }
  else {
    sanitizedOutput = JSON.parse('{' + llm_output.replace(/{/g, '').replace(/}/g, '') + '}');
  }
  try {
    // Parse the output as JSON
    return JSON.parse(sanitizedOutput);
  }
  // If parsing fails, log the error and return output value without braces
  catch (error) {
    console.error('Error parsing LLM output:', error);
    const jsonObject = {
      'interpretation': sanitizedOutput.replace('{', '').replace('}', '')
    }
    return jsonObject;
  }
}


export const generateInterpretation = async ({
  question,
  hexagram,
  changingLineInterpretations,
  secondaryHexagram,
}: GenerateInterpretationParams): Promise<string> => {
  const apiKey = import.meta.env.VITE_DEEPSEEK_R1_ZERO;
  if (!apiKey) {
    throw new Error('API key is not defined in environment variables.');
  }

  // TODO: Prompt for the LLM
  const prompt = `
    #身份： 你是一個精通周易算卦的占卜師。你擅長通過問卦人的問題，結合銅幣擲出的卦象，來解讀周易的卦辭和爻辭。你會根據問卦人的問題，給出一個詳細的解讀，並且提供一些建議。

    ##任務： 根據問卦人的問題，結合銅幣擲出的卦象，來解讀周易的卦辭和爻辭，生成符合《周易》哲學內涵的解讀，並提供針對性且實用的建議。
    你需以《周易》的哲學框架解讀卦象，注重陰陽變化、動態平衡與趨吉避凶的原則。根據用戶的問題、本卦卦辭及變爻爻辭，生成符合《周易》傳統的解讀，並提供針對性且實用的建議。解讀需明確結合問題的具體背景進行分析，確保解讀與問題高度相關。
    解讀應遵循以下規則： 
    1. 若無變爻，以本卦卦辭為主解；
    2. 若有一爻變，以本卦變爻爻辭為主解；
    3. 若有二爻變，以本卦兩個變爻中位置較高的一爻爻辭為主解；
    4. 若有三爻變，以本卦與變卦卦辭共解；
    5. 若有四爻變，以變卦下不變爻爻辭為主解；
    6. 若有五爻變，以變卦不變爻爻辭為主解；
    7. 若有六爻變，以變卦卦辭為主解。
    解讀需以'卦象'開頭，依次分析卦辭和爻辭，最後提供建議。建議應包含具體行動建議及趨吉避凶的注意事項。請避免生成與占卜無關的內容，確保建議符合《周易》趨吉避凶的宗旨。

    ###輸入格式： JSON格式如下 注意changedHexagram為變卦 如果沒有變卦則為空:
    {
      "question": "近期事業發展如何？",
      "hexagram": {
        "number": 35,
        "name": "Jin",
        "description": "晉：康侯用錫馬蕃庶，晝日三接。",
        "lines": ["young_yin", "young_yin", "young_yin", "young_yang", "old_yin", "young_yang"],
        "chineseName": "晉"
      },
      "changingLineInterpretations": [
        "六五：悔亡，失得勿恤，往吉無不利。",
      ],
      "changedHexagram": {
        "number": 12,
        "name": "Pi",
        "description": "否：否之匪人，不利君子貞，大往小來。",
        "lines": ["young_yin", "young_yin", "young_yin", "young_yang", "young_yang", "young_yang"],
        "chineseName": "否"
      }
    }

    #### 注意事項： 
    - 不可從網上即時獲取資料，請根據你已有的知識來解讀卦辭和爻辭。
    - 你可以使用周易的經典文獻，如《周易》、《周易正義》等，來幫助你解讀卦辭和爻辭。
    - 不要有"問卦人詢問"的字眼。
    - interpretation 以"卦象"開頭，然後是卦辭的內容，然後是爻辭的內容，最後是建議的內容。
    - 輸出必須是有效的 JSON 格式，且不得包含多餘的換行符或格式化字符（例如 \\n、\\t)。請確保輸出是一個單行的 JSON 字符串。
    - 不要在 interpretation 內容中使用 Markdown 格式（例如 **加粗** 或 *斜體*），所有文字應為純文本。
    - 不要在 interpretation 內容中使用額外字符如{ }或[]，只需使用純文本。
    
    ### 輸出格式： JSON格式如下,請一定遵循這個格式:
    {
      "interpretation": "解讀的內容+建議"
    }
    #### 輸出示例：
    {
      "interpretation": "卦象為「晉」卦，卦辭為「康侯用錫馬蕃庶，晝日三接..."
    }
  `;

  // TODO: Input
  let input;
  if (secondaryHexagram === null) {
    input = `
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
      ],
      "changedHexagram": {
          "number": "",
          "name": "",
          "description": "",
          "lines": "",
          "chineseName": ""
      }
    }
    `
  } else {
    input = `
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
        ],
        "changedHexagram": {
            "number": ${secondaryHexagram.number},
            "name": "${secondaryHexagram.name}",
            "description": "${secondaryHexagram.description}",
            "lines": ${JSON.stringify(secondaryHexagram.lines)},
            "chineseName": "${secondaryHexagram.chineseName}"
        }
      }
      `
  }

  // For verifying
  console.log('Input to LLM:', input);

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

    let interpretation = response.data.choices[0].message.content.trim().replace("\\boxed","").replace("\\box","");

    console.log('Raw LLM response:', interpretation);

    // Attempt to parse the response as JSON
    let parsedResponse;
    try {
      parsedResponse = sanitizingOutput(interpretation);
    } catch (error) {
      console.error('Failed to parse LLM response as JSON:', error);
      // If parsing fails, assume the response is a plain text string and clean it
      interpretation = interpretation
        .replace(/\\boxed\{.*?\}/g, '') // Remove LaTeX boxed formatting
        .replace(/[\r\n\t]+/g, ' ') // Replace newlines, carriage returns, and tabs with a single space
        .replace(/\s+/g, ' ') // Collapse multiple spaces into a single space
        .replace(/[*]+/g, '') // Remove asterisks (e.g., *, **)
        .replace("\\box","") // Remove \box
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