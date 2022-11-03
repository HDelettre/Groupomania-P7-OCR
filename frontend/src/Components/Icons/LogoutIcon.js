import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LogoutIcon = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.userData);
 
  const exitUser = () => {
    async function logoutUser(){
      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_USER}/logout/${user._id}`, {
          method: 'GET',
          headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`} 
        })
        console.log(reponse);
        navigate('/Logout');
      }
      catch (error) { console.log(error)}
    }
    logoutUser();
  }

  return (
    <div className='icon'>
      <i className="fas fa-sign-out-alt icon" title="Déconnection" onClick={exitUser}></i>
    </div>
  );
}

export default LogoutIcon;
