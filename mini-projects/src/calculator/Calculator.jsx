import React, { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const display = (value) => {
    setInputValue(inputValue + value);
  };
  const clear = () => {
    setInputValue('');
  };
  const calculation = () => {
    setInputValue(eval(inputValue));
  };
  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input type="text" value={inputValue} />
      </div>
      <div>
        <button onClick={() => clear('c')}>c</button>
        <button onClick={() => calculation('=')}>=</button>
      </div>
      <div>
        <button onClick={() => display('1')}>1</button>
        <button onClick={() => display('2')}>2</button>
        <button onClick={() => display('3')}>3</button>
        <button onClick={() => display('4')}>4</button>
        <button onClick={() => display('5')}>5</button>
        <button onClick={() => display('6')}>6</button>
        <button onClick={() => display('7')}>7</button>
        <button onClick={() => display('8')}>8</button>
        <button onClick={() => display('9')}>9</button>
        <button onClick={() => display('0')}>0</button>
        <button onClick={() => display('+')}>+</button>
        <button onClick={() => display('-')}>-</button>
        <button onClick={() => display('/')}>/</button>
      </div>
    </div>
  );
};
export default Calculator;
