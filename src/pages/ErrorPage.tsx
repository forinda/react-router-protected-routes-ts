import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const err = useRouteError() as any;
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <pre>{err.status ? err.status : 500}</pre>
        <pre>{err.statusText ? err.statusText : "Something went wrong"}</pre>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};
