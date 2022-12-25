import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type Props = {
  children: JSX.Element;
};

const Protected: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation().pathname;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default Protected;
