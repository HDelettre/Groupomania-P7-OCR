import React from 'react';

// Import Components
import FollowIcon from '../Icons/FollowIcon';

const FriendsBox = ({unFollow, user}) => {

  return (
    <div className='profile_suggest--box'>
      {`${unFollow.firstName} ${unFollow.lastName}`}
      <FollowIcon idToFollow={unFollow._id} user={user} />
    </div>
  );
}

export default FriendsBox;
