'use client'
import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (op) => {
    setFirstNumber(display);
    setDisplay('0');
    setOperation(op);
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display);
    
    switch(operation) {
      case '+':
        setDisplay((num1 + num2).toString());
        break;
      case '-':
        setDisplay((num1 - num2).toString());
        break;
      case '*':
        setDisplay((num1 * num2).toString());
        break;
      case '/':
        setDisplay((num2 === 0 ? 'Error' : (num1 / num2).toString()));
        break;
      default:
        break;
    }
    
    setOperation('');
    setFirstNumber('');
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber('');
    setOperation('');
  };

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-6">Calculator</h1>
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs">
        <div className="mb-4">
          <div className="text-right text-3xl font-semibold text-gray-800 bg-gray-300 p-4 rounded-lg h-20 overflow-hidden">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="col-span-2 bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg text-xl">
            AC
          </button>
          <button onClick={() => handleOperator('/')} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-xl">
            ÷
          </button>
          <button onClick={() => handleOperator('*')} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-xl">
            ×
          </button>
          
          {[7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleNumber(num.toString())} className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-xl">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('-')} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-xl">
            -
          </button>
          
          {[4, 5, 6].map((num) => (
            <button key={num} onClick={() => handleNumber(num.toString())} className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-xl">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('+')} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-xl">
            +
          </button>
          
          {[1, 2, 3].map((num) => (
            <button key={num} onClick={() => handleNumber(num.toString())} className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-xl">
              {num}
            </button>
          ))}
          <button onClick={handleEqual} className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg text-xl row-span-2">
            =
          </button>
          
          <button onClick={() => handleNumber('0')} className="col-span-2 bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-xl">
            0
          </button>
          <button onClick={() => handleNumber('.')} className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-xl">
            .
          </button>
        </div>
      </div>
    </div>
  );
}