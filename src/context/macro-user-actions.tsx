import { createContext, Dispatch, useReducer } from 'react';

import {
  macroUserActionsInitialState,
  macroUserActionsReducer,
  MacroUserActionsActions,
  MacroUserActionsState,
} from '../reduces';
import { DefaultProviderProps } from './default-provider-props';

interface MacroUserActionsContextData {
  state: MacroUserActionsState;
  dispatch: Dispatch<MacroUserActionsActions>;
}

export const MacroUserActionsContext =
  createContext<MacroUserActionsContextData>({} as any);

export const MacroUserActionsProvider = ({
  children,
}: DefaultProviderProps) => {
  const [state, dispatch] = useReducer(
    macroUserActionsReducer,
    macroUserActionsInitialState,
  );

  return (
    <MacroUserActionsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MacroUserActionsContext.Provider>
  );
};
