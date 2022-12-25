import { AxiosError } from "axios";
import React from "react";
import {
  Form,
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useRouteError,
} from "react-router-dom";
import api from "../api";
import InputElement from "../components/InputElement";
import { PostType } from "../state/types";
const loader = async ({ params }: LoaderFunctionArgs) => {
  const { postId } = params;
  const post = await api.get("/posts/post/" + postId);
  return post.data;
};

const action = async ({ request, params }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  await api.put("/posts/post/" + params.postId, Object.fromEntries(formData));

  return redirect("/");
};
const EditPost = () => {
  const { post } = useLoaderData() as { post: PostType };
  return (
    <div>
      <Form
        method="post"
        className="max-w-[30rem] mx-auto p-10 rounded shadow-md flex flex-col gap-4 border m-5"
      >
        <h1 className="font-bold text-3xl">Edit Post</h1>
        <InputElement id="title" defaultValue={post.title} name="title" />
        <InputElement
          type="textarea"
          cols={30}
          rows={10}
          id="body"
          defaultValue={post.body}
          name="body"
        />
        <button type="submit" className="w-full bg-blue-600 py-2 text-white">
          Save changes
        </button>
      </Form>
    </div>
  );
};

const ErrorBoundary = () => {
  const err = useRouteError() as any;
  return (
    <div>
      <pre>
        {err instanceof AxiosError
          ? err.response?.data.message
          : err.statusText}
      </pre>
    </div>
  );
};

export default Object.assign(EditPost, {
  loader,
  action,
  ErrorBoundary,
});
