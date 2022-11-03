import React from 'react';

// Import Components
import FollowIcon from '../Icons/FollowIcon';

const FriendsBox = ({unFollow, userId}) => {
  console.log('UNFOLLOW', unFollow)

  return (
    <div className='profile_suggest--box'>
      {`${unFollow.firstName} ${unFollow.lastName}`}
      <FollowIcon idToFollow={unFollow._id} userId={userId} />
    </div>
  );
}

export default FriendsBox;
