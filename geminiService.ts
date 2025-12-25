
import { GoogleGenAI } from "@google/genai";
import { LAB_NAME, PI_NAME, RESEARCH_AREAS, PUBLICATIONS } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askResearchAssistant(query: string, lang: 'zh' | 'en' = 'zh') {
  if (!process.env.API_KEY) {
      return lang === 'zh' ? "抱歉，AI助理目前不可用（缺少API密钥）。" : "Sorry, AI assistant is currently unavailable (API key missing).";
  }

  const systemPrompt = `
    You are the official AI Research Assistant for ${LAB_NAME[lang]}, led by ${PI_NAME[lang]}.
    
    Current Research Areas:
    ${RESEARCH_AREAS.map(a => `- ${a.title[lang]}: ${a.shortDesc[lang]}`).join('\n')}
    
    Response Language: ${lang === 'zh' ? 'Chinese' : 'English'}.
    Tone: Professional and academic.
    Keep answers concise. If you don't know the answer, suggest contacting the lab at isl-lab@tju.edu.cn.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });
    return response.text || (lang === 'zh' ? "我无法生成回复，请重试。" : "I couldn't generate a response. Please try again.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'zh' ? "连接AI时出错。" : "Error connecting to AI.";
  }
}
