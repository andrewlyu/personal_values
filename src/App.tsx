import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ValuesSummary from './components/ValuesSummary';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/results/:resultKey" element={<ValuesSummary />} />
          <Route path="/" element={<div>Please provide a result key in the URL</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
