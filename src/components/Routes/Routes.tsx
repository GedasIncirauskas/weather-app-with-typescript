import { Route, Switch, RouterProps } from 'react-router-dom';
import { routes } from './../../config/routes';

const Routes: React.FC<RouterProps> = () => {
  return (
    <Switch>
      {routes.map(({ path, Component, isExact, title }) => (
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
