import { BrowserRouter, Link } from 'react-router-dom';
import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';

export const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <div>
          <Link to="/">Top</Link>
          <br />
          <Link to="/home">Home</Link>
          <br />
          <Link to="/User">User</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
        </div>

        <Router></Router>
      </BrowserRouter>
    </UserProvider>
  );
};
