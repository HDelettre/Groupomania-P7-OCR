import React from 'react';

import FollowIcon from '../Icons/FollowIcon';

const PostAuthor = ({post, postAuthor}) => {

  return (
    <div className='postcard_author'>
      <img src={`${process.env.REACT_APP_API_IMG}/profile/${postAuthor.imageUrl}`} alt="profile" />
      
      <h3>{`${postAuthor.firstName} ${postAuthor.lastName}`}</h3>
      
      { post.authorId === postAuthor._id ? ('') : ( <FollowIcon idToFollow={post.authorId} userId={postAuthor._id} /> ) }
      
    </div>
  );
}

export default PostAuthor;
