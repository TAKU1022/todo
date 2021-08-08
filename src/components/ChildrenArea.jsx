import React, { memo } from 'react';
import styled from 'styled-components';

export const ChildrenArea = memo((props) => {
  const { open, closeArea } = props;

  console.log('childrenAreaがレンダリングされた！');

  return (
    <>
      {open ? (
        <Container>
          <p>子コンポーネント</p>
          <button onClick={closeArea}>閉じる</button>
        </Container>
      ) : null}
    </>
  );
});

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: khaki;
  text-align: center;
  padding: 40px;
`;
