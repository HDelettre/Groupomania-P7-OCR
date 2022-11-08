import React from 'react';
import { useSelector } from 'react-redux';
import FriendsBox from './FriendsBox';

const FriendsSuggest = ({user}) => {

  const allUsers = useSelector((state) => state.users.allUsers)

  const unFollowUser = [];
  allUsers.map((unFollow) => {
    if (!user.followings.includes(unFollow._id) && !user.followers.includes(unFollow._id) && user._id !== unFollow._id)
{ unFollowUser.push(unFollow)}
  })

  unFollowUser.length = 8;

  return (
    <div className='profile_suggest'>
      <h2>Suggestion d'amis</h2>
      <div className='profile_suggest--list'>
      { unFollowUser.map((unFollow) => <FriendsBox unFollow={unFollow} user={user} /> )}
        </div> 
    </div>
  ); 
}

export default FriendsSuggest;
