import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UPDATE_USER } from "../../SliceReducers/slice.user";

// Import components
import LogoutIcon from "../Icons/LogoutIcon";

const ProfileNavbar = ({
  setProfilePict,
  setProfileFile,
  setMimeType,
  storyTxt,
  setProfileEdit,
  setErrorMsg,
  setUpdateProfile,
  updateProfile
}) => {
  const dispatch = useDispatch();

  const insertPicture = (e) => {
    if (e.target.files[0].size > 5000) {
      setErrorMsg('Ce fichier est trop volumineux (maxi: 5Mo)')
    } else {
      setProfilePict(URL.createObjectURL(e.target.files[0]));
      setProfileFile(e.target.files[0]);
      setMimeType(e.target.files[0].name.split(".")[1]);
      setProfileEdit(true);
      setErrorMsg('');
    }
  };

  const editHandle = () => {
    setUpdateProfile(true);
  };
  const validEditPost = () => {
    dispatch(UPDATE_USER([storyTxt, ""]));
    setUpdateProfile(false);
  };
  const abortEditPost = () => {
    setUpdateProfile(false);
  };

  return (
    <div className="profile_navbar">
      {updateProfile ? (
        <>
          <i
            className="fa-solid fa-check-double icon "
            title="Valider la modification"
            onClick={validEditPost}
          ></i>

          <i
            className="fa-regular fa-rectangle-xmark icon "
            title="Annuler la modification"
            onClick={abortEditPost}
          ></i>
        </>
      ) : (
        <>
          <i
            className="fa-regular fa-pen-to-square icon"
            title="Editer la présentation"
            onClick={editHandle}
          ></i>

          <i className="fa-regular fa-image icon" title="Changer ma photo"></i>
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
  );
};

export default ProfileNavbar;
