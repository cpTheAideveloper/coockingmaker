import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import type { NextRequest } from 'next/server';
import { RecipeLevel } from '@/types';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  export async function POST(request: NextRequest) {
    const { ingredients, level } = await request.json();
  
    // Define the system message to adjust the response
    const systemMessage = `You are a recipe assistant. Provide a list of recipes with detailed steps. Response format in JSON:
    {
      "recipes": [
        {
          "id": "string",
          "title": "string",
          "ingredients": ["string"],
          "steps": ["string"],
          "level": "beginner | intermediate | advanced"
        }
      ]
    }`;
  
    const userMessage = `Ingredients: ${ingredients.join(', ')}. Difficulty level: ${level}.`;
  
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userMessage },
      ],
    });
  
    try {
      const data = JSON.parse(completion.choices[0].message.content!);
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error: 'Error processing AI response.' }, { status: 500 });
    }
  }