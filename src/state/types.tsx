export type PostType = {
  _id: string;
  title: string;
  body: string;
  image: string;
};

export type User = {
  username: string;
  email: string;
  role: 'admin'|'user'|'moderator';
};

export type AuthStateType = {
  token: string;
  user: User | null;
  loading: boolean;
  err: any;
  isAuthenticated: boolean;
};

export type PostState = {
  posts: PostType[];
  loading: boolean;
  err: any;
};

export type AppStateType = {
  postsState: PostState;
  authState: AuthStateType;
};

export type PostActionType = {
  ["GET_POSTS_START"]: null;
  ["GET_POSTS_SUCCESS"]: PostType[];
  ["GET_POSTS_ERROR"]: { message: string; status: number };
};
export type AuthActionType = {
  ["LOGIN_START"]: null;
  ["LOGIN_SUCCESS"]: {
    token: string;
    user: User;
  };
  ["LOGIN_ERROR"]?: { message: string; status: number };
  ["LOGOUT_START"]: null;
  ["LOGOUT_SUCCESS"]: null;
  ["LOGOUT_ERROR"]: { message: string; status: number };
  ["REGISTER_START"]: null;
  ["REGISTER_SUCCESS"]: {
    token: string;
    user: User;
  };
  ["REGISTER_ERROR"]: { message: string; status: number };
};
export type MapType<T> = {
  [key in keyof T]: T[key] extends undefined
    ? { type: key } //& U extends infer V ? { [K in keyof V]: V[K] } : never
    : { type: key; payload: T[key] };
};
export type DispatchType = {
  ["GET_POSTS"]: () => void;
  ["GET_POSTS_SUCCESS"]: (payload: PostType[]) => void;
  ["GET_POSTS_ERROR"]: (payload: any) => void;
};
export type PostActions = Exclude<
  MapType<PostActionType>[keyof MapType<PostActionType>],
  undefined
>;
export type AuthActions =
  MapType<AuthActionType>[keyof MapType<AuthActionType>];
export type AllActions = PostActions | AuthActions;

export type ReducerFunction<T = any, A = any> = (
  state: T extends infer AppState ? AppState : null & undefined,
  action: A extends infer PostActionType ? PostActionType : undefined
) => T;
// Type for the combined reducer which take reducer functions as arguments and return a reducer function
export type CombinedReducerFunction<T = any, A = any> = (
  reducers: ReducerFunction<T, A>[]
) => ReducerFunction<T, A>;
