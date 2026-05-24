import { useState } from "react";

export default function LikeButton() {
  let [isliked, setisliked] = useState(false);
  let toggleLike = () => {
    setisliked(!isliked);
  };
  let likestyle = { color: "red" };
  return (
    <div>
      <p onClick={toggleLike}>
        {isliked ? (
          <i className="fa-solid fa-heart" style={likestyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
