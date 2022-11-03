import React, {useEffect, useState} from 'react';

import FollowIcon from '../Icons/FollowIcon';

const PostAuthor = ({post,postAuthor, user}) => {
  const [follow, setFollow] = useState(false)

  useEffect(() => {
    if (follow) setFollow(false)
  }, [follow]);

  return (
    <div className='postcard_author'>
      <img src={`${process.env.REACT_APP_API_IMG}/profile/${postAuthor.imageUrl}`} alt="profile" />
      
      <h3>{`${postAuthor.firstName} ${postAuthor.lastName}`}</h3>
      
      { post.authorId === user._id ? ('') : ( <FollowIcon idToFollow={post.authorId} userId={user._id} /> ) }
      
    </div>
  );
}

export default PostAuthor;
