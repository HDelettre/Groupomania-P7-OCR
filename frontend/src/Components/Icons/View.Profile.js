import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProfile = ({ otherUserId }) => {

  const navigate = useNavigate(otherUserId);

  const viewOtherProfile = () => {
    console.log("CLIC OTHER PROFILE: ", otherUserId);
    
    navigate("/OtherProfile",  {state: {otherUserId}} );
  };

  return (
    <div>
      <i
        className="fa-regular fa-user icon"
        title="Voir le profil"
        onClick={viewOtherProfile}
      ></i>
    </div>
  );
};

export default ViewProfile;
