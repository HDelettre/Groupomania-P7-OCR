import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { CHANGE_ROLE } from "../../SliceReducers/slice.users";

const UserBox = ({ user, admin }) => {
  const [newRole, setNewRole] = useState(user.role);
  const dispatch = useDispatch();
  let changeRole = newRole

  const roleHandle = (e) => {
    setNewRole(e.target.id);
    
    if (window.confirm('Veuillez confirmer le changement !')) {
      changeRole = e.target.id
      validUpdate();
    }
  }

  const validUpdate = () => {
    
    // on modifie la BdD
    async function fetchChangeRole() {
      const bodyRequest = {
        idUser: admin._id,
        newRole: changeRole
      }
      
      try {
        const reponse = await fetch(
          `${process.env.REACT_APP_API_USER}/newrole/${user._id}`,
          {
            method: "PUT",
            body: JSON.stringify(bodyRequest),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${admin.token}`
            }
          }
          );
          console.log('REPONSE FETCH CHANGE ROLE: ', reponse);
          
        } catch (error) {console.log(error)}
      }
      
      fetchChangeRole();

      console.log('change role avant dispatch: ',user._id, ' / ', changeRole)
      
      dispatch(CHANGE_ROLE([user._id, changeRole]));
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
