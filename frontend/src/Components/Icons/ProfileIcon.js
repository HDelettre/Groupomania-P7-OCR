import React from "react";
import { Link } from "react-router-dom";

const ProfileIcon = () => {
  return (
    <Link to="/Profile">
      <i
        className="fas fa-user homecontainer_navbarprofile--btn"
        title="Edit Profil"
      ></i>
    </Link>
  );
};

export default ProfileIcon;
