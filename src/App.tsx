// src/App.tsx

import React from 'react';
import './App.css';
import AverageCalculator from './component/AverageCalculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <AverageCalculator />
    </div>
  );
}

export default App;
