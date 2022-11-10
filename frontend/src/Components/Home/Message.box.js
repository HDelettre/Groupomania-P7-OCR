import React from "react";

// Import components
import PostCard from "./Posts.Card";

const MessageBox = ({ allPosts }) => {
  return (
    <>
      {allPosts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </>
  );
};

export default MessageBox;
