import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import SpinLoader from "../SpinLoader/SpinLoader";

// import Reducer
import { GET_ALLUSERS } from "../../SliceReducers/slice.users";
import MessageBox from "./Message.box";

const MessageContainer = ({ user }) => {
  const [loadingMsg, setLoadingMsg] = useState(true);
  const [allUsers, setAllUsers] = useState("");

  const allMessage = useSelector((state) => state.message.messageData);
  const dispatch = useDispatch();

  console.log("ALL MESSAGE: ", allMessage);

  useEffect(() => {
    fetchAllUsers();

    setLoadingMsg(false);
  }, []);

  async function fetchAllUsers() {
    console.log("FETCHALLUSERS");
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
      setAllUsers(JSON.parse(JSON.stringify(reponseJSON.allUsers)));
    } catch (error) {
      console.log("Error during fetchAllUsers: ", error);
    }
  }

  return loadingMsg ? (
    <SpinLoader />
  ) : (
    <div className="postcontainer">
      <h2>Les derniers messages</h2>
      <MessageBox user={user} allMessage={allMessage} />
    </div>
  );
};

export default MessageContainer;
