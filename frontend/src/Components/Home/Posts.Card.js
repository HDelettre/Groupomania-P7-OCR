import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Import Components
import FollowIcon from "../Icons/FollowIcon";
import PostMessage from "./PostMessage";
import ViewProfile from "../Icons/View.Profile";
import SpinLoader from '../SpinLoader/SpinLoader';

// Import Utils
import { dateOnly, timeOnly } from "../../Utils/dateFormat";

const PostsCard = ({ post, setLoadPosts }) => {
  const [posterData, setPosterData] = useState("");

  const user = useSelector((state) => state.user.userData);

  const allUsers = useSelector((state) => state.users.allUsers);

  useEffect(() => {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i]._id === post.authorId) {
        setPosterData(allUsers[i]);
        break;
      }
    }
  }, []);

  return !posterData ? (
    <SpinLoader />
  ) : (
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
          <div className="postcard_author--icons">
            <FollowIcon idToFollow={post.authorId} user={user} />
            <ViewProfile otherUserId={post.authorId} />
          </div>
        )}
      </div>

      <div className="separation_vertical"></div>

      <PostMessage post={post} user={user} setLoadPosts={setLoadPosts} />

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
