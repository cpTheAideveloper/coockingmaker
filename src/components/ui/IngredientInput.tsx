import { useState } from 'react';

interface IngredientInputProps {
    onSubmit: (ingredients: string[], level: string) => void;
  }


  export default function IngredientInput({ onSubmit }: IngredientInputProps) {
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [level, setLevel] = useState('beginner');
    
    // Function to add an ingredient to the list
    const addIngredient = () => {
      if (ingredient.trim()) {
        setIngredients([...ingredients, ingredient.trim()]);
        setIngredient('');
      }
    };
  
    // Function to handle the submission of the ingredient list and level
    const handleSubmit = () => {
      onSubmit(ingredients, level);
    };
  
    return (
      <div className="p-4">
        <h2 className="text-xl mb-2">Enter Your Ingredients</h2>
        <div className="flex mb-2">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="border p-2 flex-1"
            placeholder="Add ingredient"
          />
          <button onClick={addIngredient} className="ml-2 px-4">
            Add
          </button>
        </div>
        <div className="mb-2">
          <label className="mr-2">Difficulty Level:</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)} className="border p-2">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
          Search Recipes
        </button>
        <div className="mt-4">
          <h3 className="text-lg">Ingredients:</h3>
          <ul>
            {ingredients.map((ing, index) => (
              <li key={index} className="list-disc ml-5">{ing}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }