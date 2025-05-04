import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="flex-shrink-0 mr-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold">
          {icon || number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;