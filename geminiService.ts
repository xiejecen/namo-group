
import { GoogleGenAI } from "@google/genai";
import { LAB_NAME, PI_NAME, RESEARCH_AREAS, PUBLICATIONS } from "./constants";

// Corrected: Initializing the AI client using the mandatory named parameter and direct process.env.API_KEY reference.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askResearchAssistant(query: string) {
  if (!process.env.API_KEY) {
      return "I'm sorry, but the AI Assistant is currently unavailable (API key missing).";
  }

  const systemPrompt = `
    You are the official AI Research Assistant for ${LAB_NAME}, led by ${PI_NAME}.
    Your goal is to help visitors (students, collaborators, researchers) understand the lab's work.
    
    Current Research Areas:
    ${RESEARCH_AREAS.map(a => `- ${a.title}: ${a.shortDesc}`).join('\n')}
    
    Selected Publications:
    ${PUBLICATIONS.map(p => `- "${p.title}" (${p.year}) by ${p.authors.join(', ')}`).join('\n')}
    
    Tone: Professional, helpful, academic.
    Keep answers concise. If you don't know the answer, suggest they contact the lab directly.
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
    // response.text is a direct property, not a method.
    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with AI. Please try again later.";
  }
}
