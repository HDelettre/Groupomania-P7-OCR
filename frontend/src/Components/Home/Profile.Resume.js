import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import Components
import LogoutIcon from "../Icons/LogoutIcon";

// Import Utils
import { dateForm } from "../../Utils/dateFormat";

const ProfileResume = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div className="homecontainer_profile">
      <h2>Bonjour {`${user.firstName} ${user.lastName}`} </h2>
      <img
        src={`${process.env.REACT_APP_API_IMG}/profile/${user.imageUrl}`}
        alt=""
      />
      <p>Incrit depuis le {dateForm(user.createdAt)}</p>
      <div className="separation_horizontal"></div>
      <div className="homecontainer_navbarprofile">
        <Link to="/Profile">
          <i
            className="fas fa-user homecontainer_navbarprofile--btn"
            title="Edit Profil"
          ></i>
        </Link>

        { user.role === process.env.REACT_APP_API_ADMIN ? (
          <Link to="/Admin">
            <i className="fa-solid fa-users icon"></i>
          </Link>
        ) : ('')}

        <LogoutIcon />
      </div>
    </div>
  );
};

export default ProfileResume;
