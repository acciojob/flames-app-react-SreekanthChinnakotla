import React, { useState } from 'react';

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateFlames = () => {
    const commonLetters = getCommonLetters(name1, name2);
    const remainingLetters = name1.length + name2.length - 2 * commonLetters.length;
    setResult(getFlamesResult(remainingLetters));
  };

  const getCommonLetters = (str1, str2) => {
    const arr1 = str1.toLowerCase().replace(/\s/g, '').split('');
    const arr2 = str2.toLowerCase().replace(/\s/g, '').split('');

    return arr1.filter((char) => arr2.includes(char));
  };

  const getFlamesResult = (remainingLetters) => {
    const flames = ['Friends', 'Lovers', 'Angry', 'Marriage', 'Engaged', 'Siblings'];

    while (flames.length > 1) {
      const index = (remainingLetters % flames.length - 1 + flames.length) % flames.length;
      flames.splice(index, 1);
    }

    return flames[0];
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
        <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} />
      </label>
      <br />
      <label>
        Name 2:
        <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateFlames}>Calculate</button>
      <button onClick={clearResult}>Clear</button>
      <br />
      {result && <h1>Result: {result}</h1>}
    </div>
  );
};

export default FlamesGame;
