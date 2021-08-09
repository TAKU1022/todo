import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './providers/UserProvider';

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const navigateAsAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/users');
  };

  const navigateAsGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push('/users');
  };

  return (
    <div>
      <h1>TOPページです</h1>
      <button onClick={navigateAsAdmin}>管理者ユーザー</button>
      <br />
      <button onClick={navigateAsGeneral}>一般ユーザー</button>
    </div>
  );
};
