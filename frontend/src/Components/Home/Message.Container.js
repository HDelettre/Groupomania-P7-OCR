import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import SpinLoader from "../SpinLoader/SpinLoader";
import MessageBox from "./Message.box";

// import Reducer
import { GET_ALLUSERS } from "../../SliceReducers/slice.users";

const MessageContainer = ({ user, setLoadPosts, loadPosts, setNewPost, newPost }) => {
  const [loadingMsg, setLoadingMsg] = useState(true);
  const [countPosts, setCountPosts] = useState(5);
  const [allPosts, setAllPosts] = useState("");

  const allMessage = useSelector((state) => state.message.messageData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loadPosts || newPost) {
      setAllPosts(allMessage.slice(0, countPosts));
      if (loadPosts) {setCountPosts(countPosts + 5);}
      setLoadPosts(false);
      setNewPost(false);
    }
  }, [loadPosts, newPost]);

  useEffect(() => {
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

        dispatch(
          GET_ALLUSERS(JSON.parse(JSON.stringify(reponseJSON.allUsers)))
        );
        setLoadingMsg(false);
      } catch (error) {
        console.log("Error during fetchAllUsers: ", error);
      }
    }
    if (loadingMsg && user) {
      fetchAllUsers();
    }

    window.addEventListener("scroll", AddPosts);
    return () => window.removeEventListener("scroll", AddPosts);
  }, [loadingMsg, user]);

  const AddPosts = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPosts(true);
    }
  };

  return loadingMsg ? (
    <SpinLoader />
  ) : (
    <div className="postcontainer">
      <h2>Les derniers messages</h2>
      <MessageBox allPosts={allPosts} setLoadPosts={setLoadPosts} />
    </div>
  );
};

export default MessageContainer;
