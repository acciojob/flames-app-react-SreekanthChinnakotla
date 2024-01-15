import React, { useState } from 'react';

const FlamesGame = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [result, setResult] = useState('');
  
    const calculateFlames = () => {
      const flamesResult = getFlamesResult(name1, name2);
      setResult(flamesResult);
    };
  
    const getFlamesResult = (name1, name2) => {
      if (!name1 || !name2) {
        return "Please Enter valid input";
      }
  
      const commonLetters = getCommonLetters(name1, name2);
      const name1Remaining = removeCommonLetters(name1, commonLetters);
      const name2Remaining = removeCommonLetters(name2, commonLetters);
  
      const remainingLettersSum = (name1Remaining.length + name2Remaining.length) % 6;
  
      switch (remainingLettersSum) {
        case 1:
          return "Friends";
        case 2:
          return "Love";
        case 3:
          return "Affection";
        case 4:
          return "Marriage";
        case 5:
          return "Enemy";
        case 0:
          return "Siblings";
        default:
          return "Invalid input";
      }
    };
  
    const getCommonLetters = (str1, str2) => {
      const arr1 = str1.split('');
      const arr2 = str2.split('');
  
      return arr1.filter(char => {
        const index = arr2.indexOf(char);
        if (index !== -1) {
          arr2.splice(index, 1);
          return true;
        }
        return false;
      });
    };
  
    const removeCommonLetters = (str, commonLetters) => {
      return str.split('').filter(char => !commonLetters.includes(char)).join('');
    };
  
    const clearResult = () => {
      setResult('');
      setName1('');
      setName2('');
    };

  return (
    <div>
      <h2>FLAMES Game</h2>
      <label>
        Name 1:
        <input type="text" data-testid="input1" name='name1' value={name1} onChange={(e) => setName1(e.target.value)} />
      </label>
      <br />
      <label>
        Name 2:
        <input type="text" name='name2' data-testid="input2" value={name2} onChange={(e) => setName2(e.target.value)} />
      </label>
      <br />
      <button data-testid="calculate_relationship" onClick={calculateFlames}>Calculate Relationship Future</button>
      <button data-testid="clear" onClick={clearResult}>Clear</button>
      <br />
      <h3 data-testid="answer">{'Marriage'}{result}</h3>
    </div>
  );
};

export default FlamesGame;
