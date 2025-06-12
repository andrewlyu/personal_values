import React from 'react';
import './App.css';
import ValuesSummary from './components/ValuesSummary';

function App() {
  // Sample data - replace this with actual data from your API
  const sampleValues = [
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

  return (
    <div className="App">
      <ValuesSummary values={sampleValues} />
    </div>
  );
}

export default App;
