import axios from "axios";
import api from ".";

const createPicsumImages = (count: number) => {
  const images = [];
  for (let i = 0; i < count; i++) {
    images.push(`https://picsum.photos/seed/${i}/1000/1000`);
  }
  return images;
};

export const createIndexImages = (count: number) => {
  return `https://picsum.photos/seed/${count}/1000/1000`;
};

export const getPosts = async () => {
  const images = createPicsumImages(150);
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const myposts = posts.data.map((post: any, index: number) => ({
    ...post,
    image: images[index],
  }));
  return myposts.forEach((post: any) =>
    api
      .post("/posts", post)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  );

  return posts;
};
