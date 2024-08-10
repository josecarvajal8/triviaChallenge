import React, {FC, createContext, useContext, useReducer} from 'react';
import reducer from './flux';
import {IContextState} from '../../models/context';

const initialState = {
  answers: {
    correct: 0,
    incorrect: 0,
  },
};

const AppContext = createContext({});

export const AppProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): {
  state: IContextState;
  dispatch: React.Dispatch<unknown>;
} => {
  const {state, dispatch} = useContext<any>(AppContext);
  return {state, dispatch};
};
