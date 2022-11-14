import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// import components
import SpinLoader from "../SpinLoader/SpinLoader";

// Import Utils
import { dateForm } from "../../Utils/dateFormat";

const OtherProfile = ({}) => {
  const location = useLocation();
  const otherUserId = location.state.otherUserId;
  const users = useSelector((state) => state.users.allUsers);
  const [user, setUser] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    if (otherUserId && users) {
      for (let i = 0; i < users.length; i++) {
        if (otherUserId === users[i]._id) {
          setUser(users[i]);
          break;
        }
      }
    }
  }, []);

  const returnToHome = () => {
    navigate('/Home');
  }

  return !user ? (
    <SpinLoader />
  ) : (
    <>
      <div className="othercontainer">
        <div className="othercontainer_title">
          <h2>Profil de: {`${user.firstName} ${user.lastName}`}</h2>
        </div>

        <div className="othercontainer_row">
          <div className="othercontainer_row--picture">
            <img
              src={`${process.env.REACT_APP_API_IMG}/profile/${user.imageUrl}`}
              alt={`${user.firstName} ${user.lastName}`}
            />
          </div>

          <div className="othercontainer_row--infos">
            Inscrit depuis le {dateForm(user.createdAt)}.<br />
            Message posté: {user.posts.length}<br />
            Personne suivi: {user.followings.length}<br />
            Personne qui suive: {user.followers.length}<br />
            Message aimé: {user.likes.length}
          </div>
        <div className="othercontainer_row--story">Présentation: {user.story}</div>
        </div>


        <div className="othercontainer_btn" onClick={returnToHome}>RETOUR</div>
      </div>
    </>
  );
};

export default OtherProfile;
