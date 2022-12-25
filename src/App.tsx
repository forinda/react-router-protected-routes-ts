import React from "react";
import api from "./api";
import { AxiosError } from "axios";
import { getPosts } from "./api/posts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import useAppState from "./hooks/useAppState";
const App = () => {

  return <RouterProvider router={router} />;
};

export default App;
