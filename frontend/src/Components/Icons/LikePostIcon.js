import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIKE_MESSAGE } from "../../SliceReducers/slice.message";
import { LIKE_USER } from "../../SliceReducers/slice.user";

const LikePostIcon = ({ post }) => {
  const [addLike, setAddLike] = useState(false);
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addLike) {
      dispatch(LIKE_MESSAGE([post._id, user._id]));

      dispatch(LIKE_USER(post._id));

      setAddLike(false);
    }
  }, [addLike]);

  const likedBy = () => {
    async function fetchLikePost() {
      const bodyRequest = {
        idPost: post._id,
        idUser: user._id,
        idPostUser: post.authorId,
      };

      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_MSG}/like`, {
          method: "PATCH",
          body: JSON.stringify(bodyRequest),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        console.log("FetchLikePost: ", reponse);

        setAddLike(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLikePost();
  };

  return (
    <>
      {user.likes.includes(post._id) ? (
        <i
          className="fa-solid fa-heart icon"
          title="Je n'aime plus"
          onClick={likedBy}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart icon"
          title="J'aime"
          onClick={likedBy}
        ></i>
      )}
      <br />
      {post.LikeId.length}
    </>
  );
};

export default LikePostIcon;
