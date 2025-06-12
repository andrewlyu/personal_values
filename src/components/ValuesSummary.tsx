import React from 'react';
import './ValuesSummary.css';

interface Value {
  name: string;
  score: number;
  description: string;
}

interface ValuesSummaryProps {
  values: Value[];
}

const ValuesSummary: React.FC<ValuesSummaryProps> = ({ values }) => {
  // Sort values by score in descending order
  const sortedValues = [...values].sort((a, b) => b.score - a.score);
  
  // Get top 5 values
  const topValues = sortedValues.slice(0, 5);

  return (
    <div className="values-summary">
      <h1>Your Core Values</h1>
      <div className="values-list">
        {topValues.map((value, index) => (
          <div key={value.name} className="value-item">
            <div className="value-header">
              <span className="value-rank">#{index + 1}</span>
              <h2>{value.name}</h2>
              <span className="value-score">{value.score}%</span>
            </div>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSummary; 