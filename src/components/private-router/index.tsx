import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuthContext } from '../../hooks';

export const PrivateRouter = ({ children, ...rest }: RouteProps) => {
  const { user } = useAuthContext();
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && user.isEmailVerified ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/authentication',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
