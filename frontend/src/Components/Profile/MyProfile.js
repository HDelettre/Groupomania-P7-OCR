import React from "react";

import image from "../../Assets/index.png";

// Import components
import Header from "../Header/Header";
import FriendsSuggest from "./FriendsSuggest";
import ProfileFollow from "./ProfileFollow";
import ProfileInfo from "./ProfileInfo";
import ProfileNavbar from "./ProfileNavbar";
import ProfileStory from "./ProfileStory";

const MyProfile = () => {
  return (
    <>
      <Header />
      <div className="profilecontainer">
        <div className="profile">
          <h2>Profil de Jean Martin</h2>
          <div className="profile_row">
            <ProfileInfo />
            <div className="profile_picture">
              <img src={image} />
            </div>
          </div>
          <div className="profile_row">
            <ProfileStory />
            <ProfileNavbar />
          </div>
          <div className="profile_valid">VALIDER</div>
          <div className="separation_horizontal"></div>
          <ProfileFollow />
        </div>
        <FriendsSuggest />
      </div>
    </>
  );
};

export default MyProfile;
