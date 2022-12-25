import React, { createContext } from "react";
import { postsReducer } from "./reducers/postsReducer";
import { userReducer } from "./reducers/userReducer";
import { AllActions, AppStateType, AuthStateType, PostState } from "./types";
const APP_NAME = "app-state";
const authState = JSON.parse(localStorage.getItem(APP_NAME)!)
  ? JSON.parse(localStorage.getItem(APP_NAME)!)
  : ({} as AuthStateType);
const initialState: AppStateType = {
  authState: authState,
  postsState: {} as PostState,
};

const combinedReducer = (state: AppStateType, action: AllActions): AppStateType => ({
  postsState: postsReducer(state.postsState, action),
  authState: userReducer(state.authState, action),
});

const AppContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<AllActions>;
}>({ state: initialState, dispatch: () => {} });
const AppProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = React.useReducer(combinedReducer, initialState);
  React.useEffect(() => {
    localStorage.setItem(APP_NAME, JSON.stringify(state.authState));
  }, [state.authState.isAuthenticated]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;
