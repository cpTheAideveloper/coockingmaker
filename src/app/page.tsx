

// src/app/page.ts'use client';

'use client'
import { useState } from 'react';
import IngredientInput from '@/components/ui/IngredientInput';
import RecipeList from '@/components/ui/RecipeList';
import Loading from '@/components/ui/Loading';
import { Recipe } from '@/types';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (ingredients: string[], level: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients, level }),
      });

      if (!response.ok) {
        throw new Error('Error fetching recipes.');
      }

      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error(error);
      alert('There was a problem fetching the recipes.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl text-center py-6">Recipe Assistant</h1>
      <IngredientInput onSubmit={fetchRecipes} />
      {loading ? <Loading /> : <RecipeList recipes={recipes} />}
    </div>
  );
}