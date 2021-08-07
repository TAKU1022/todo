/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
  const [number, setNumber] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const countUp = () => setNumber(number + 1);
  const switchFaceShowFlag = () => setfaceShowFlag(!faceShowFlag);

  useEffect(() => {
    if (number > 0) {
      if (number % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
  }, [number]);

  return (
    <React.Fragment>
      <h1 style={{ color: 'red' }}>こんにちわ！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={countUp}>ボタン</button>
      <button onClick={switchFaceShowFlag}>on/off</button>
      <p>{number}</p>
      {faceShowFlag && <p>(　ﾟдﾟ)</p>}
    </React.Fragment>
  );
};

export default App;
