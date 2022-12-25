import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthStateType } from "../state/types";
import Protected from "./Protected";

type Props = {
  children: JSX.Element;
};

const AdminProtected: React.FC<Props> = ({ children }) => {
  const { user: userAuth } = useAuth() as AuthStateType;

  return (
    <Protected>
      {userAuth?.role === "admin" ? (
        children
      ) : (
        <>
          <h1>Forbidden</h1>
          <Link to={"/"}>Home</Link>
        </>
      )}
    </Protected>
  );
};

export default AdminProtected;
