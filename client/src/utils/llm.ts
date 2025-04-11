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
        
  `;

  // TODO: Input
  const input = `
  ${question}, ${hexagram}, ${changingLineInterpretations}
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
        max_tokens: 128000,
        temperature: 0.3,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const interpretation = response.data.choices[0].message.content.trim();
    return interpretation;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw new Error('Failed to generate interpretation from LLM.');
  }
};