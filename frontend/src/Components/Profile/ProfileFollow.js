import React from 'react';
import ProfileBox from './ProfileBox';

const ProfileFollow = () => {
  return (
    <div className='profile_follow'>
      <div className='profile_follow_list'>
      <h2>Vous les suivez ...</h2>
      <ProfileBox />
      </div>

      <div className='profile_follow_list'>
      <h2>Ils vous suivent ...</h2>
      <ProfileBox />
      </div>
    </div>
  );
}

export default ProfileFollow;
