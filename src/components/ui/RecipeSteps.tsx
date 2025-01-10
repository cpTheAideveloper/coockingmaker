// src/components/ui/RecipeSteps.tsx

import { useState } from 'react';

interface RecipeStepsProps {
  steps: string[];
}

export default function RecipeSteps({ steps }: RecipeStepsProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="mt-2">
      <div className="border p-2 rounded bg-gray-100">
        <p>{steps[currentStep]}</p>
      </div>
      <div className="flex justify-between mt-2">
        <button onClick={prevStep} disabled={currentStep === 0} className="px-4 py-2 bg-gray-300 rounded">
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}