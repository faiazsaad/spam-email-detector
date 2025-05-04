import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, description }) => {
  return (
    <div className="card p-6 hover:translate-y-[-5px]">
      <div className="flex items-center mb-4">
        {icon && <div className="text-blue-600 mr-3">{icon}</div>}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="text-3xl font-bold text-blue-700 mb-2">{value}</div>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
  );
};

export default MetricCard;