import React from 'react';
import {useSelector} from 'react-redux';

// Import utils
import { dateForm } from '../../Utils/dateFormat';

const ProfileInfo = () => {

  const user=useSelector((state) => state.user.userData)

  return (
    <div className='profile_info'>
      Inscrit depuis le {dateForm(user.createdAt)}<br/>
      Vous avez posté {user.posts.length} message{user.posts.length>0 ? ('s'):('')} <br/>
      Vous suivez {user.followings.length} personne{user.followings.length>0 ? ('s'):('')}<br/>
      {user.followers.length} personne{user.followers.length>0 ? ('s'):('')} vous suivent<br/>
      Vous avez aimé {user.likes.length} message{user.likes.length>0 ? ('s'):('')}
    </div>
  );
}

export default ProfileInfo;
