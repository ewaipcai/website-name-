
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratorParams, GeneratedName } from "../types";

export const generateBusinessNames = async (params: GeneratorParams): Promise<GeneratedName[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `Generate 10 unique and catchy business names for a business in the ${params.industry} industry. 
    Use the following keywords: ${params.keywords}. 
    The tone of the names should be ${params.tone}. 
    For each name, provide a short one-line tagline and a brief explanation of why the name works.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              tagline: { type: Type.STRING },
              explanation: { type: Type.STRING },
            },
            required: ["name", "tagline", "explanation"],
          },
        },
      },
    });

    const results = JSON.parse(response.text || "[]");
    return results;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to generate names. Please try again.");
  }
};
