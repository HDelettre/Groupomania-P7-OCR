import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNavbar = () => {
  return (
    <div className='profile_navbar'>
      <i
              className="fa-regular fa-image icon"
              title="Changer ma photo"
            ></i>

<Link to="/Home">
            <i className="fa-solid fa-house icon" title="Accueil"></i>
          </Link>
          <Link to="/Logout">
            <i className="fas fa-sign-out-alt icon" title="Logout"></i>
          </Link>
    </div>
  );
}

export default ProfileNavbar;
