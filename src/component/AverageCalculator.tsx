// src/AverageCalculator.tsx

import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator: React.FC = () => {
  const [numberId, setNumberId] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleFetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      setResult(response.data);
      setError('');
    } catch (error) {
      setResult(null);
      setError('Failed to fetch numbers');
    }
  };

  return (
    <div>
      <h2>Average Calculator</h2>
      <div>
        <label htmlFor="numberId">Enter Number ID: </label>
        <input type="text" id="numberId" value={numberId} onChange={(e) => setNumberId(e.target.value)} />
        <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <h3>Result</h3>
          <p>Numbers: {result.numbers.join(', ')}</p>
          <p>Previous Window State: {result.windowPrevState.join(', ')}</p>
          <p>Current Window State: {result.windowCurrState.join(', ')}</p>
          <p>Average: {result.avg}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
