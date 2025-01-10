// src/components/ui/RecipeList.tsx

import { Recipe } from '@/types';
import RecipeSteps from './RecipeSteps';


interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Found Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="mb-6 border p-4 rounded">
          <h3 className="text-lg">{recipe.title}</h3>
          <p>Level: {recipe.level}</p>
          <RecipeSteps steps={recipe.steps} />
        </div>
      ))}
    </div>
  );
}