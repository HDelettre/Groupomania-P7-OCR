import React from "react";
import { useSelector } from "react-redux";

// Import components
import ProfileIcon from "../Icons/ProfileIcon";

// Import Utils
import { dateForm } from "../../Utils/dateFormat";
import LogoutIcon from "../Icons/LogoutIcon";

const HomeProfile = ({}) => {
  const user = useSelector((state) => state.user.userData);

  return (
    <>
      <div className="homecontainer_profile">
        <h2>Bonjour {`${user.firstName} ${user.lastName}`} </h2>
        <img
          src={`${process.env.REACT_APP_API_IMG}/profile/${user.imageUrl}`}
          alt=""
        />
        <p>Incrit depuis le {dateForm(user.createdAt)}</p>
        <div className="separation_horizontal"></div>
        <div className="homecontainer_navbarprofile">
          <ProfileIcon />

          <LogoutIcon />
        </div>
      </div>
    </>
  );
};

export default HomeProfile;
