// src/types/index.d.ts

export type RecipeLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  steps: string[];
  level: RecipeLevel;
}