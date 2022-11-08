import React, { useState } from "react";

// Import Components
import DeletePostIcon from "../Icons/DeletePostIcon";
import EditPostIcon from "../Icons/EditPostIcon";
import LikePostIcon from "../Icons/LikePostIcon";

const PostMessage = ({ post, user }) => {
  const [editPost, setEditPost] = useState(false);
  const [editMessage, setEditMessage] = useState(post.messageTxt);

  return (
    <>
      <div className="postcard_message">
        {editPost ? (
          <textarea
            name="editPost"
            className="postcard_message--edittext"
            placeholder={editMessage}
            onChange={(e) => setEditMessage(e.target.value)}
            value={editMessage}
          ></textarea>
        ) : (
          <div className="postcard_message--text">{editMessage}</div>
        )}

        {post.messageImg ? (
          <div className="postcard_message--picture">
            <img
              src={`${process.env.REACT_APP_API_IMG}/messages/${post.messageImg}`}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="postcard_message--navbar">
        {post.authorId === user._id ? (
          <>
            <>
              <i className="fa-solid fa-heart" title="Like"></i>
              {` ${post.LikeId.length}`}
            </>
            <br />
            <EditPostIcon
              setEditPost={setEditPost}
              editPost={editPost}
              setEditMessage={setEditMessage}
              editMessage={editMessage}
              user={user}
              post={post}
            />
            <br />
            <DeletePostIcon
              user={user}
              post={post}
            />
          </>
        ) : (
          
          <LikePostIcon post={post} />
          
        )}
      </div>
    </>
  );
};

export default PostMessage;
