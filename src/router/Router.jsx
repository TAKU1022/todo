import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Page2 } from '../Page2';
import { Page1Routes } from './Page1Routes';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
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

            {/* <Route exact path={url}>
              <Page1></Page1>
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA></Page1DetailA>
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB></Page1DetailB>
            </Route> */}
          </Switch>
        )}
      ></Route>
      <Route path="/page2">
        <Page2></Page2>
      </Route>
    </Switch>
  );
};
