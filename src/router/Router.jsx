import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Page404 } from '../Page404';
import { Top } from '../Top';
import { Users } from '../Users';
import { Page1Routes } from './Page1Routes';
import { Page2Routes } from './Page2Routes';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Top></Top>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/users">
        <Users></Users>
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route path="*">
        <Page404></Page404>
      </Route>
    </Switch>
  );
};
