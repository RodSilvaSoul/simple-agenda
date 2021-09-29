import { useContext } from 'react';
import { MacroUserActionsContext } from '../context';

export const useMacroUserActionsContext = () =>
  useContext(MacroUserActionsContext);
