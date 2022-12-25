import React from "react";
import { Link } from "react-router-dom";
import useAppState from "../hooks/useAppState";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { isAuthenticated, user } = useAuth();
  const { dispatch } = useAppState();
  return (
    <div className="text-center justify-center items-center py-10 text-lg">
      <h1>
        Welcome to your profile <Link to={"#"} className="text-blue-500">{`@${user?.username}`}</Link>
      </h1>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "LOGOUT_SUCCESS", payload: null });
          }}
          className="bg-red-600 text-white px-5 py-2 my-4 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
