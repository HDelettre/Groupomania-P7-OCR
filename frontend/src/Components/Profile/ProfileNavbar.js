import React from "react";
import { Link } from "react-router-dom";

// Import components
import LogoutIcon from "../Icons/LogoutIcon";

const ProfileNavbar = ({setProfilePict, setProfileFile, setMimeType}) => {

  const insertPicture = (e) => {
    setProfilePict(URL.createObjectURL(e.target.files[0]));
    setProfileFile(e.target.files[0]);
    setMimeType(e.target.files[0].name)
  }

  return (
    <div className="profile_navbar">
      <i className="fa-regular fa-image icon" title="Changer ma photo"></i>
      <input type='file' name='file' accept='.jpg, .jpeg, .png' onChange={insertPicture} className='profile_navbar--input'/>
      <Link to="/Home">
        <i className="fa-solid fa-house icon" title="Accueil"></i>
      </Link>
      <LogoutIcon />
    </div>
  );
};

export default ProfileNavbar;
