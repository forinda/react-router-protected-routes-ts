import { AllActions, PostActions, PostState, ReducerFunction } from "../types";

export const postsReducer: ReducerFunction<PostState, AllActions> = (
  state,
  action
) => {
  const actions = action as unknown as PostActions;
  switch (actions?.type) {
    case "GET_POSTS_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: actions.payload!,
      };
    case "GET_POSTS_ERROR":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
