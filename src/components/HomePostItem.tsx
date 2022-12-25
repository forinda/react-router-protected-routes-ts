import React from "react";
import { Link } from "react-router-dom";
import { PostType } from "../state/types";

const HomePostItem = (props: PostType) => {
  const { title, image, _id } = props;
  const [img, setImg] = React.useState<string>(image);

  React.useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImg(image);
    };
    img.onerror = () => {
      setImg("https://via.placeholder.com/150");
    };
  }, [img]);

  return (
    <Link to={`/post/${_id}`} className="rounded-md shadow-sm">
      <img src={img} alt={title} />
      <div className="p-2">
        <h1 className="capitalize font-bold">{title}</h1>
      </div>
    </Link>
  );
};

export default HomePostItem;
