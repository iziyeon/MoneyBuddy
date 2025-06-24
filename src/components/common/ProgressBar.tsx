import type { JSX } from 'react';

interface ProgressHeaderProps {
  currentStep: number;
  totalSteps?: number;
}

export default function ProgressHeader({
  currentStep,
  totalSteps = 4,
}: ProgressHeaderProps): JSX.Element {
  return (
    <div className="w-full px-4 py-2 bg-white">
      <div className="w-full h-1 bg-gray-200 mt-1 rounded">
        <div
          className="h-1 bg-blue-500 transition-all rounded"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
