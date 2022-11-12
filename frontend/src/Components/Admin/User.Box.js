import React, {useState} from "react";

const UserBox = ({ user }) => {
  const [newRole, setNewRole] = useState(user.role)

  const roleHandle = (e) => {
    setNewRole(e.target.id);

    // on modifie la BdD
    async function fetchChangeRole() {

    }
    fetchChangeRole();

    // on dispatch

  };


  return (
    <div className="usercontainer_box">
      <div className="usercontainer_box--img">
        <img
          src={`${process.env.REACT_APP_API_IMG}/profile/${user.imageUrl}`}
          alt={`${user.firstName} ${user.lastName}`}
        />
      </div>

      <div className="usercontainer_box--name">
        <h3>
        {`${user.firstName} ${user.lastName}`}
        </h3>
      </div>

      <div className="usercontainer_box--role">
        <div
          className={
            newRole === process.env.REACT_APP_API_ADMIN
              ? "usercontainer_btn usercontainer_select"
              : "usercontainer_btn"
          }
          id={`${process.env.REACT_APP_API_ADMIN}`}
          onClick={roleHandle}
        >
          ADMIN
        </div>

        <div
          className={
            newRole === "USER"
              ? "usercontainer_btn usercontainer_select"
              : "usercontainer_btn"
          }
          id="USER"
          onClick={roleHandle}
        >
          USER
        </div>

        <div
          className={
            newRole === "BLOCKED"
              ? "usercontainer_btn usercontainer_select"
              : "usercontainer_btn"
          }
          id="BLOCKED"
          onClick={roleHandle}
        >
          BLOCK
        </div>
      </div>
    </div>
  );
};

export default UserBox;
