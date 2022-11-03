import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_USER } from "../../SliceReducers/slice.user";

// Import components
import Header from "../Header/Header";
import FriendsSuggest from "./FriendsSuggest";
import ProfileFollow from "./ProfileFollow";
import ProfileInfo from "./ProfileInfo";
import ProfileNavbar from "./ProfileNavbar";
import ProfileStory from "./ProfileStory";

const MyProfile = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const [updateProfile, setUpdateProfile] = useState(false);

  const [storyTxt, setStoryTxt] = useState("");

  const [profilePict, setProfilePict] = useState(
    `${process.env.REACT_APP_API_IMG}/profile/${user.imageUrl}`
  );
  const [profileFile, setProfileFile] = useState();
  const [mimeType, setMimeType] = useState("");
  let profileFileName = "";

  console.log("Mimetype: ", mimeType, ' / ', storyTxt);

  const validUpdateProfile = () => {
    const profileData = new FormData();
    profileData.append("story", storyTxt);

    if (profileFile) {
      profileData.append("profile", profileFile);
    }

    async function fetchUpdateProfile() {
      try {
        const reponse = await fetch(
          `${process.env.REACT_APP_API_USER}/${user._id}`,
          {
            method: "PUT",
            body: profileData,
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        console.log("FetchUpdateProfile: ", reponse);
        setUpdateProfile(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUpdateProfile();
  };

  useEffect(() => {
    if (user.story) {
      setStoryTxt("Votre présentation ...");
    } else {
      setStoryTxt(user.story);
    }
  }, [storyTxt]);

  useEffect(() => {
    if (updateProfile) {
      if (profileFile) {
        profileFileName = `${user._id}.${mimeType}`;
      }
      dispatch(UPDATE_USER([user.story, profileFileName]));
      setUpdateProfile(false);
    }
  }, [updateProfile]);

  return (
    <>
      <Header />
      <div className="profilecontainer">

        <div className="profile">
          <h2>Profil de {`${user.firstName} ${user.lastName}`} </h2>

          <div className="profile_row">
            <ProfileInfo user={user} />
            <div className="profile_picture">
              <img src={profilePict} />
            </div>
          </div>

          <div className="profile_row">
            <ProfileStory setStoryTxt={setStoryTxt} storyTxt={storyTxt} />
            <ProfileNavbar
              setProfilePict={setProfilePict}
              setProfileFile={setProfileFile}
              setMimeType={setMimeType}
            />
          </div>

          <div className="profile_valid" onClick={validUpdateProfile}>
            VALIDER
          </div>

          <div className="separation_horizontal"></div>

          <ProfileFollow user={user} />

        </div>

        <FriendsSuggest user={user} />

      </div>
    </>
  );
};

export default MyProfile;
