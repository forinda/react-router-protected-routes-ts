import {
  AllActions,
  AuthActions,
  AuthStateType,
  ReducerFunction,
} from "../types";

export const userReducer: ReducerFunction<AuthStateType, AllActions> = (
  state,
  actions
) => {
  const action = actions as unknown as AuthActions;
  switch (action?.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        token: action.payload?.token!,
        user: action.payload?.user!,
        isAuthenticated: true,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "LOGOUT_START":
      return {
        ...state,
        loading: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        loading: false,
        token: "",
        user: null,
        isAuthenticated: false,
      };
    case "LOGOUT_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "REGISTER_START":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        token: action.payload?.token!,
        user: action.payload?.user!,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
