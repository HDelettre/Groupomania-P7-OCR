import React from "react";
import { useSelector } from "react-redux";

// Import Components
import FriendsBox from "./FriendsBox";
import SpinLoader from "../SpinLoader/SpinLoader";

const FriendsSuggest = ({ user }) => {
  const allUsers = useSelector((state) => state.users.allUsers);

  const unFollowUser = [];
  allUsers.map((unFollow) => {
    if (
      !user.followings.includes(unFollow._id) &&
      !user.followers.includes(unFollow._id) &&
      user._id !== unFollow._id
    ) {
      unFollowUser.push(unFollow);
    }
  });

  unFollowUser.length = 8;

  return !unFollowUser ? (
    <SpinLoader />
  ) : (
    <div className="profile_suggest">
      <h2>Suggestion d'amis</h2>
      <div className="profile_suggest--list">
        {unFollowUser.map((unFollow) => (
          <FriendsBox
            unFollow={unFollow}
            user={user}
            key={`friends${unFollow._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsSuggest;
