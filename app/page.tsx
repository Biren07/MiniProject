// pages/index.js
'use client';
import { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if(count>0)
    {
      setCount(count - 1);
    }
  }
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black shadow-lg rounded-lg p-5 text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <p className="text-xl mb-6">Current Count: <strong>{count}</strong></p>
        <div className="space-x-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-900 transition"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
