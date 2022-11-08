import React from "react";

// Import components
import PostCard from "./Posts.Card";

const MessageBox = ({ allMessage }) => {
  return (
    <>
      {allMessage.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </>
  );
};

export default MessageBox;
