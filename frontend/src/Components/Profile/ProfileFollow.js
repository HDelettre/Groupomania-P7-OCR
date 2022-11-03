import React from 'react';
import ProfileBox from './ProfileBox';

const ProfileFollow = ({user}) => {
  return (
    <div className='profile_follow'>
      <div className='profile_follow_list'>
      <h2>Vous les suivez ...</h2>
      { user.followings.map((idToFollow) => <ProfileBox idToFollow={idToFollow} key={idToFollow} userId={user._id} />) }
      </div>

      <div className='profile_follow_list'>
      <h2>Ils vous suivent ...</h2>
      { user.followers.map((idToFollow) => <ProfileBox idToFollow={idToFollow} key={idToFollow} userId={user._id} />) }
      </div>
    </div>
  );
}

export default ProfileFollow;
