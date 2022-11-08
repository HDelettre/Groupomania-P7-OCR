import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import SpinLoader from "../SpinLoader/SpinLoader";
import MessageBox from "./Message.box";

// import Reducer
import { GET_ALLUSERS } from "../../SliceReducers/slice.users";

const MessageContainer = ({ user }) => {
  const [loadingMsg, setLoadingMsg] = useState(true);

  const allMessage = useSelector((state) => state.message.messageData);
  const dispatch = useDispatch();

  async function fetchAllUsers() {
    setLoadingMsg(true);
    try {
      const reponse = await fetch(`${process.env.REACT_APP_API_USER}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const reponseJSON = await reponse.json();

      dispatch(GET_ALLUSERS(JSON.parse(JSON.stringify(reponseJSON.allUsers))));
      
    } catch (error) {
      console.log("Error during fetchAllUsers: ", error);
    }
  }
  fetchAllUsers();

  if (loadingMsg && user) { setLoadingMsg(false)}

  return loadingMsg ? (
    <SpinLoader />
  ) : (
    <div className="postcontainer">
      <h2>Les derniers messages</h2>
      <MessageBox allMessage={allMessage} />
    </div>
  );
};

export default MessageContainer;
