import { createBrowserRouter, Outlet } from "react-router-dom";
import AdminProtected from "../components/AdminProtected";
import Protected from "../components/Protected";
import UnAuthorized from "../components/UnAuthenticated";
import Base from "../pages/Base";
import CreatePost from "../pages/CreatePost";
import DeletePost from "../pages/DeletePost";
import EditPost from "../pages/EditPost";
import { ErrorPage } from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SinglePost from "../pages/SinglePost";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <Base />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: Home.loader,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/create",
        element: <AdminProtected>
          <CreatePost />
        </AdminProtected>,
        action: CreatePost.action,
        errorElement: <CreatePost.ErrorBoundary />,
      },
      {
        path: "/post/:postId",
        element: <SinglePost />,
        loader: SinglePost.loader,
      },
      {
        path: "/post/:postId/destroy",
        element: <Outlet />,
        action: DeletePost.action,
      },
      {
        path: "/edit/:postId",
        element: (
          <Protected>
            <EditPost />
          </Protected>
        ),
        loader: EditPost.loader,
        action: EditPost.action,
        errorElement: <EditPost.ErrorBoundary />,
      },
      {
        path: "/login",
        element: (
          <UnAuthorized>
            <Login />
          </UnAuthorized>
        ),
      },
      {
        path: "/profile",
        element: (
          <Protected>
            <Profile />
          </Protected>
        ),
      },
    ],
  },
]);
