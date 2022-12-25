import React from "react";
import { useLoaderData } from "react-router-dom";
import api from "../api";
import HomePostItem from "../components/HomePostItem";
import useAppState from "../hooks/useAppState";
import useAuth from "../hooks/useAuth";
import { PostType } from "../state/types";

const loader = async () => {
  const res = await api.get("/posts");
  return res.data;
};

const action = async () => {};

const Home = () => {
  const { posts: data } = useLoaderData() as { posts: PostType[] };
  //   const [posts, setPosts] = React.useState([]);
  const auth = useAuth();
  const { postsState:posts, dispatch } = useAppState();
  React.useEffect(() => {
    if (data) {
      dispatch({ type: "GET_POSTS_SUCCESS", payload: data });
      return;
    }
  }, []);
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 max-w-7xl mx-auto p-4">
        {posts.posts!&&
          posts.posts!.map((post) => (
            <HomePostItem {...post} key={post._id} />
          ))}
      </div>
    </div>
  );
};

export default Object.assign(Home, {
  loader,
  action,
});
