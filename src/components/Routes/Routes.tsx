import React = require('react');
import { Route, Switch } from 'react-router-dom';
import { routes } from './../../config/routes';

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, Component, isExact, title }: any) => (
        <Route
          key={path}
          path={path}
          exact={isExact}
          render={() => {
            document.title = title;
            return <Component />;
          }}
        />
      ))}
    </Switch>
  );
};

export default Routes;
