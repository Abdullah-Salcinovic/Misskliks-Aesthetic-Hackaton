import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [operator, setOperator] = useState('+');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleCalculate = () => {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);

    if (operator === '+') {
      setResult(n1 + n2);
    } else if (operator === '-') {
      setResult(n1 - n2);
    } else if (operator === '*') {
      setResult(n1 * n2);
    } else if (operator === '/') {
      setResult(n1 / n2);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <div className="input-group">
        <input type="text" value={num1} onChange={handleNum1Change} />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" value={num2} onChange={handleNum2Change} />
        <button onClick={handleCalculate}>Calculate</button>
      </div>

      <div className="result">{result}</div>
    </div>
  );
}

export default Calculator;
