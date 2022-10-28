import React from "react";
import { Link } from "react-router-dom";

import image from "../../Assets/index.png";

const HomeProfile = () => {
  return (
    <>
      <div className="homecontainer_profile">
        <h2>Bonjour Michel Leplatre</h2>
        <img src={image} alt="" />
        <p>Incrit depuis le 15 octobre 2022</p>

        <div className="homecontainer_navbarprofile">
          <Link to="/Profile">
            <i className="fas fa-user homecontainer_navbarprofile--btn" title="Edit Profil"></i>
          </Link>
          <br />
          <Link to="/Logout">
            <i className="fas fa-sign-out-alt homecontainer_navbarprofile--btn" title="Déconnection"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeProfile;
