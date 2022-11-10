import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import SpinLoader from "../SpinLoader/SpinLoader";
import MessageBox from "./Message.box";

// import Reducer
import { GET_ALLUSERS } from "../../SliceReducers/slice.users";

const MessageContainer = ({ user }) => {
  const [loadingMsg, setLoadingMsg] = useState(true);
  const [countPosts, setCountPosts] = useState(5);

  const allMessage = useSelector((state) => state.message.messageData);
  
  const allPosts = allMessage.slice(0, countPosts)
  
  const dispatch = useDispatch();

  useEffect(() => {

    if (loadingMsg && user) {fetchAllUsers() }
    
  }, [loadingMsg, user]);

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
      setLoadingMsg(false)
    } catch (error) {
      console.log("Error during fetchAllUsers: ", error);
    }
  }

  return loadingMsg ? (
    <SpinLoader />
  ) : (
    <div className="postcontainer">
      <h2>Les derniers messages</h2>
      <MessageBox allPosts={allPosts} />
    </div>
  );
};

export default MessageContainer;
