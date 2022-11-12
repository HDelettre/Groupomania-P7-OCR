import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import components
import SpinLoader from "../SpinLoader/SpinLoader";
import UserBox from "./User.Box";

const Dashboard = () => {
  const users = useSelector((state) => state.users.allUsers);

  return users ? (
    <div className="usercontainer">
      <Link to='/Home' className="usercontainer_navbar">RETOUR ACCUEIL</Link>

      {users.map((user) => (
        <UserBox user={user} />
      ))}
    </div>
  ) : (
    <SpinLoader />
  );
};

export default Dashboard;
