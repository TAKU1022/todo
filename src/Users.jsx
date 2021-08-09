import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from './providers/UserProvider';

export const Users = () => {
  const userArray = [...Array(10).keys()];
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  console.log(isAdmin);

  return (
    <div>
      <h1>Usersページです</h1>

      <Grid>
        {userArray.map((number) => (
          <Card key={number}>
            <p>{number}</p>
            {isAdmin && <p>編集者</p>}
          </Card>
        ))}
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 24px;
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
