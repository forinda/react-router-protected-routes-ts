import React from "react";
import { Form, Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import api from "../api";
import { PostType } from "../state/types";

const loader = async ({ params }: LoaderFunctionArgs) => {
  const { postId } = params;
  const res = await api.get(`/posts/post/${postId}`);
  return res.data;
};

const SinglePost = () => {
  const { post } = useLoaderData() as { post: PostType };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4">
        <img src={post.image} alt={post.title} className="w-80" />
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-lg">{post.body}</p>
        <div className="flex gap-4">
          <Link to={`/edit/${post._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Edit
          </Link>
          <Form action="destroy">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Object.assign(SinglePost, {
  loader,
});
