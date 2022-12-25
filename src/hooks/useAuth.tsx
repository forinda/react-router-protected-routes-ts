import React from "react";
import { AppContext } from "../state";
import { AuthStateType } from "../state/types";

const useAuth = () => {
  const {
    state: { authState },
  } = React.useContext(AppContext);

  return {
    ...authState,
  };
};

export default useAuth;
