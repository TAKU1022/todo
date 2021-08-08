import React, { memo } from 'react';

const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

export const ChildrenArea = memo((props) => {
  const { open, closeArea } = props;

  console.log('childrenAreaがレンダリングされた！');

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={closeArea}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
