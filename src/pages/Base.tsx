import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Base = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <div className="bg-white w-full shadow-md p-4 sticky top-0 font-bold">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <h1>
            <Link to="/">Home</Link>
          </h1>
          {isAuthenticated ? (
            <ul className="flex gap-4">
              <li>
                <Link to="/create">Create Post</Link>
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Base;
