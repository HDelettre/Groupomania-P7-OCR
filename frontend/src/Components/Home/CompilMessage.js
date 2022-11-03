import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import Slice
import { GET_MESSAGE } from "../../SliceReducers/slice.message";

// Import components
import PostCard from "./PostCard";
import SpinLoader from "../SpinLoader/SpinLoader";

const CompilMessage = ({newMsg, setNewMsg}) => {
  const user = useSelector((state) => state.user.userData);
  console.log("user in compil: ", user);
  const dispatch = useDispatch();

  const [loadingMessage, setLoadingMessage] = useState(true);
  const [allMessage, setAllMessage] = useState("");
  const [delMsg, setDelMsg] = useState(false)

  useEffect(() => {
    console.log('USE EFFECT DANS COMPILMESSAGE')
    async function loadAllMsg() {
      setLoadingMessage(true);

      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_MSG}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          }
        });

        const reponseJSON = await reponse.json();
        console.log("reponseJSON all posts: ", reponseJSON);
        setAllMessage(reponseJSON);
        dispatch(GET_MESSAGE(reponseJSON));
        setNewMsg(false)
        setDelMsg(false)
        setLoadingMessage(false);
      } catch (error) {
        console.log(error);
      } 
    }
    loadAllMsg();
  }, [loadingMessage, newMsg, delMsg]);

  return loadingMessage ? (
    <SpinLoader />
  ) : (
    <>
      {allMessage.map((post) => (
        <PostCard post={post} key={post._id} setDelMsg={setDelMsg} />
      ))}
    </>
  );
};

export default CompilMessage;
