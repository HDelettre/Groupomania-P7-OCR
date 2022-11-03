import React from 'react';
import { useSelector } from 'react-redux';
import FriendsBox from './FriendsBox';

const FriendsSuggest = ({user}) => {

  const allUsers = useSelector((state) => state.users.allUsers)

  console.log(allUsers)

  allUsers.map((unFollow) => console.log(unFollow._id))

  return (
    <div className='profile_suggest'>
      <h2>Suggestion d'amis</h2>
      <div className='profile_suggest--list'>
        { allUsers.map((unFollow) => 
        !user.followings.includes(unFollow._id) && !user.followers.includes(unFollow._id) && user._id !== unFollow._id ?
        ( <FriendsBox unFollow={unFollow} userId={user._id} />) : ('')
        )}
        </div> 
    </div>
  ); 
}

export default FriendsSuggest;
