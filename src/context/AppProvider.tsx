import React, { createContext, ReactNode, useReducer } from "react";


const initialState = {};
export const AppContext = createContext({
  state: initialState,
  dispatch: () => {},
});


const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

interface AppProviderProps {
  children: ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
