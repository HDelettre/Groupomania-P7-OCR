import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

// Import components
import FollowIcon from '../Icons/FollowIcon';

// import Slice reducer
import { FOLLOW_USER } from '../../SliceReducers/slice.user';

const PostAuthor = ({post,posterData, user}) => {
  const [follow, setFollow] = useState(false)

  const dispatch=useDispatch

  useEffect(() => {
    if (follow) 
    {dispatch(FOLLOW_USER(post.authorId))
    setFollow(false)}
  }, [follow]);

  return (
    <div className='postcard_author'>
      <img src={`${process.env.REACT_APP_API_IMG}/profile/${posterData.imageUrl}`} alt="profile" />
      
      <h3>{`${posterData.firstName} ${posterData.lastName}`}</h3>
      
      { post.authorId === user._id ? ('') : ( <FollowIcon idToFollow={post.authorId} user={user} /> ) }
      
    </div>
  );
}

export default PostAuthor;
