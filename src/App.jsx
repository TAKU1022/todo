import React, { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const [number, setNumber] = useState(0);
  const countUp = () => setNumber(number + 1);

  return (
    <React.Fragment>
      <h1 style={{ color: 'red' }}>こんにちわ！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={countUp}>ボタン</button>
      <p>{number}</p>
    </React.Fragment>
  );
};

export default App;
