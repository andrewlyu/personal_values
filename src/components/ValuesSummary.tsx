import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ValuesSummary.css';

interface Value {
  name: string;
  score: number;
  description: string;
}

// Mock data for testing
const mockValues: Value[] = [
  {
    name: "Achievement",
    score: 95,
    description: "Striving for excellence and accomplishment in all endeavors"
  },
  {
    name: "Creativity",
    score: 88,
    description: "Expressing yourself through innovative and original ideas"
  },
  {
    name: "Independence",
    score: 85,
    description: "Making decisions and taking actions based on your own judgment"
  },
  {
    name: "Learning",
    score: 82,
    description: "Continuously acquiring new knowledge and skills"
  },
  {
    name: "Balance",
    score: 80,
    description: "Maintaining harmony between different aspects of life"
  }
];

const ValuesSummary: React.FC = () => {
  const { resultKey } = useParams<{ resultKey: string }>();
  const [values, setValues] = useState<Value[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        setValues(mockValues);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (resultKey) {
      fetchValues();
    }
  }, [resultKey]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

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