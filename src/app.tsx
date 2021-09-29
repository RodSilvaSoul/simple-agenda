import { Switch, Route } from 'react-router-dom';

import {
  Authentication,
  DashBoard,
  ForgotYourPassword,
  PrivateRouter,
} from './components';
import { MacroUserActionsProvider } from './context';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/forgot-your-password">
        <ForgotYourPassword />
      </Route>
      <Route exact path="/authentication">
        <Authentication />
      </Route>
      <PrivateRouter path="/">
        <MacroUserActionsProvider>
          <DashBoard />
        </MacroUserActionsProvider>
      </PrivateRouter>
    </Switch>
  );
};
