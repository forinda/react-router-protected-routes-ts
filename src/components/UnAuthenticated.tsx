import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type Props = {
  children: JSX.Element;
};

const UnAuthenticated: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? children : <Navigate to={"/"} replace />;
};

export default UnAuthenticated;
