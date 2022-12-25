import { AxiosError } from "axios";
import React from "react";
import {
  Form,
  LoaderFunctionArgs,
  useNavigate,
  useRouteError,
  redirect,
} from "react-router-dom";
import api from "../api";
import { createIndexImages } from "../api/posts";
import InputElement from "../components/InputElement";
import useAppState from "../hooks/useAppState";

const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const post = Object.fromEntries(formData.entries());

  const res = await api.post("/posts", post);
  return redirect("/");
};

const CreatePost = () => {
  const {
    postsState: { posts },
  } = useAppState();


  return (
    <div>
      <Form method="post" action="" id="contact-form" className="max-w-[40rem] mx-auto p-10 rounded shadow-md flex flex-col gap-4 border m-5">
      <h1 className="text-center font-bold text-3xl">CreatePost</h1>
          <InputElement
          id="title"
            placeholder="title"
            aria-label="Post title"
            type="text"
            name="title"
            defaultValue={""}
            // onChange={handleInputChange}
          />
            <InputElement
            id="body"
              type="textarea"
              name="body"
              placeholder="Some text..."
              defaultValue={""}
            />
            <InputElement
              placeholder="https://example.com/avatar.jpg"
              aria-label="Avatar URL"
              type="text"
              name="image"
              id="image"
              defaultValue={createIndexImages(posts ? posts.length + 1 : 25)}
            />
        <p>
        <button type="submit" className="w-full bg-blue-600 py-2 text-white">
          Save new entry
        </button>
        </p>
      </Form>
    </div>
  );
};

const ErrorBoundary = () => {
  const error = useRouteError() as any;
  const axError = error as AxiosError<any>;
  const navigate = useNavigate();
  return (
    <>
      <h1>Something went wrong</h1>
      <p>{error.statusText}</p>
      <p>{axError && (axError.response?.data!.message as unknown as string)}</p>
      <button onClick={() => navigate(-1)}>Go back </button>
    </>
  );
};

export default Object.assign(CreatePost, {
  action,
  ErrorBoundary,
});

