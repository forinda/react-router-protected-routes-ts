import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputElement from "../components/InputElement";
import useAppState from "../hooks/useAppState";
type User = {
  email: string;
  role: string;
  username: string;
};
const Login = () => {
  const [user, setUser] = React.useState<User>({} as User);
  const { dispatch } = useAppState();
  const state = useLocation().state;

  const navigate = useNavigate();
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget!);
    const data = Object.fromEntries(formData) as User & { username: string };
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        token: new Date().getTime().toString(),
        user: { ...(data as any) },
      },
    });
    navigate(state.from ? state.from : "/");
  };
  console.log(state);
  return (
    <div>
      <div>
        <form
          method="post"
          onSubmit={submitForm}
          className="max-w-[30rem] mx-auto p-10 rounded shadow-md flex flex-col gap-4 border m-5"
        >
          <h1 className="font-bold text-3xl text-center">Sign in</h1>
          <InputElement
            id="email"
            defaultValue={user.email}
            name="email"
            label="Email address"
            placeholder="email"
          />
          <InputElement
            id="username"
            defaultValue={user.username}
            name="username"
            label="Username"
            placeholder="username"
          />
          <InputElement
            type="text"
            label="Role"
            id="role"
            defaultValue={user.role}
            name="role"
            placeholder="admin"
          />
          <button type="submit" className="w-full bg-blue-600 py-2 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
