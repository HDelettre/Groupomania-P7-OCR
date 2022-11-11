import React from "react";

// Import components
import PostCard from "./Posts.Card";

const MessageBox = ({ allPosts, setLoadPosts }) => {
  return (
    <>
      {allPosts.map((post) => (
        <PostCard post={post} key={post._id} setLoadPosts={setLoadPosts} />
      ))}
    </>
  );
};

export default MessageBox;
