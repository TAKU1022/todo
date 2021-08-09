import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/page1">
            <Page1></Page1>
          </Route>
          <Route path="/page2">
            <Page2></Page2>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
