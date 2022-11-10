import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Import components
import ProfileInfo from "./ProfileInfo";
import ProfileFollow from "./Profile.Follow";
import FriendsSuggest from "./Friends.Suggest";
import LogoutIcon from "../Icons/LogoutIcon";

//Import Utils
import { fetchUpdateProfile } from "../../Utils/update.profile"; 
import { UPDATE_USER } from "../../SliceReducers/slice.user";

const MyProfile = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch =useDispatch();

  const [profilePict, setProfilePict] = useState(
    `${process.env.REACT_APP_API_IMG}/profile/${user.imageUrl}`
  );
  const [profileEdit, setProfileEdit] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [storyTxt, setStoryTxt] = useState('');

  const mimeTypeAvailable = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
  };

  useEffect(() => {
    if (user.story) {
      setStoryTxt(user.story);
    } else {
      setStoryTxt("Votre présentation ...");
    }
  }, []);

  const validEditPost = () => {
    const profileNewData = new FormData();
    profileNewData.append("story", storyTxt);

    fetchUpdateProfile(profileNewData,user._id, user.token);

      const profileFileName = '';
      
      dispatch(UPDATE_USER([storyTxt, profileFileName]))
      setErrorMsg('Votre présentation a été mise à jour avec succès !')

    setProfileEdit(false);
  };

  const insertPicture = (e) => {
    const mimeTypePicture = mimeTypeAvailable[e.target.files[0].type];
    if (e.target.files[0].size > 5000000) {
      setErrorMsg("Ce fichier est trop volumineux ! (Max 5 Mo)");

    } else if (mimeTypePicture === undefined) {
      setErrorMsg('Les images acceptées doivent être au format .jpg, .jpeg ou .png')
    } else {
      setErrorMsg('');
      setProfilePict(URL.createObjectURL(e.target.files[0]));

      const profileNewData = new FormData();
      profileNewData.append( "profile", e.target.files[0])

      fetchUpdateProfile(profileNewData,user._id, user.token);

      const profileFileName = `${user._id}.${mimeTypePicture}`;
      const newStory ='';
      dispatch(UPDATE_USER([newStory, profileFileName]))
      setErrorMsg('Votre image de profil a été mise à jour avec succès !')
    }
  };

  return (
    <>
      <div className="profilecontainer">
        <div className="profile">
          <h2>Profil de {`${user.firstName} ${user.lastName}`}</h2>

          <div className="profile_row">
            <ProfileInfo user={user} />
            <div className="profile_picture">
              <img src={profilePict} alt={`${user.firstName} ${user.lastName}`} />
            </div>
          </div>

          <div className="profile_row">
            {profileEdit ? (
              <textarea
                name="story"
                className="profile_story profile_story--area"
                placeholder="Votre présentation ..."
                onChange={(e) => setStoryTxt(e.target.value)}
                value={storyTxt}
              ></textarea>
            ) : (
              <div className="profile_story">{storyTxt}</div>
            )}

            <div className="profile_navbar">
              {profileEdit ? (
                <>
                  <i
                    className="fa-solid fa-check-double icon "
                    title="Valider la modification"
                    onClick={validEditPost}
                  ></i>

                  <i
                    className="fa-regular fa-rectangle-xmark icon "
                    title="Annuler la modification"
                    onClick={() => setProfileEdit(false)}
                  ></i>
                </>
              ) : (
                <>
                  <i
                    className="fa-regular fa-pen-to-square icon"
                    title="Editer la présentation"
                    onClick={() => setProfileEdit(true)}
                  ></i>

                  <i
                    className="fa-regular fa-image icon"
                    title="Changer ma photo"
                  ></i>
                  <input
                    type="file"
                    name="profile"
                    accept=".jpg, .jpeg, .png"
                    onChange={insertPicture}
                    className="profile_navbar--input"
                  />
                  <Link to="/Home">
                    <i className="fa-solid fa-house icon" title="Accueil"></i>
                  </Link>
                  <LogoutIcon />
                </>
              )}
            </div>
          </div>

          <div className="profile_message">{errorMsg}</div>

          <div className="separation_horizontal"></div>

          <ProfileFollow user={user} />
        </div>

        <FriendsSuggest user={user} />

      </div>
    </>
  );
};

export default MyProfile;
