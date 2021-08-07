import React from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const onClickButton = () => alert();
  return (
    <React.Fragment>
      <h1 style={{ color: 'red' }}>こんにちわ！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
