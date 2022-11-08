import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Import Components
import FollowIcon from "../Icons/FollowIcon";
import PostMessage from "./PostMessage";

// Import Utils
import { dateOnly, timeOnly } from "../../Utils/dateFormat";

const PostsCard = ({ post }) => {
  const [posterData, setPosterData] = useState("");

  const user = useSelector((state) => state.user.userData);

  const allUsers = useSelector((state) => state.users.allUsers);

  useEffect(() => {
    console.log("USE EFFECT DANS POSTCARD");
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i]._id === post.authorId) {
        setPosterData(allUsers[i]);
        break;
      }
    }
  }, [post]);

  return (
    <div className="postcard">
      <div className="postcard_author">
        <img
          src={`${process.env.REACT_APP_API_IMG}/profile/${posterData.imageUrl}`}
          alt="profile"
        />
        <h3>{`${posterData.firstName} ${posterData.lastName}`}</h3>
        {post.authorId === user._id ? (
          ""
        ) : (
          <FollowIcon idToFollow={post.authorId} user={user} />
        )}
      </div>

      <div className="separation_vertical"></div>

      <PostMessage post={post} user={user} />

      <div className="separation_vertical"></div>
      <div className="postcard_information">
        {dateOnly(post.createdAt)}
        <br />
        {timeOnly(post.createdAt)}
      </div>
    </div>
  );
};

export default PostsCard;
