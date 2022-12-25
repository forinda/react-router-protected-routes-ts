import React from "react";
import { AppContext } from "../state";

const useAppState = () => {
  const {
    dispatch,
    state: { authState, postsState },
  } = React.useContext(AppContext);
  return { dispatch, postsState, authState };
};

export default useAppState;
