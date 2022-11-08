import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FollowIcon from '../Icons/FollowIcon';

const ProfileBox = ({idToFollow, user}) => {

  const allUsers = useSelector((state) => state.users.allUsers)
  const [userFollow, setUserFollow] = useState('')

  useEffect(() => {
    for (let i=0; i<allUsers.length; i++) {
    if (allUsers[i]._id === idToFollow) {
      setUserFollow(allUsers[i])
      break
    }
  }
  }, [idToFollow]);
  

  return (
    
      <div className='profile_follow--box'>
        {`${userFollow.firstName} ${userFollow.lastName}`}
        <FollowIcon idToFollow={idToFollow} user={user} />
        </div>
    
  );
}

export default ProfileBox;
