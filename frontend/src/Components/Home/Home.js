import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import components
import Header from "../Header/Header";
import CompilMessage from "./CompilMessage";
import HomeUp from "./HomeUp";
import SpinLoader from "../SpinLoader/SpinLoader";
import { GET_ALLUSERS } from "../../SliceReducers/slice.users";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const [loadMessage, setLoadMessage] = useState(true);
  const [newMsg, setNewMsg] = useState(false)

  useEffect(() => {
    if (loadMessage)
    {console.log('USE EFFECT DANS HOME')
    async function loadAllUsers() {
      setLoadMessage(true);
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
        setLoadMessage(false);
        
      } catch (error) {
        console.log(error);
      }
    }
    loadAllUsers();}
  }, [loadMessage]);

  return loadMessage ? (
    <SpinLoader />
  ) : (
    <>
      <Header />

      <div className="homecontainer">
        <HomeUp setNewMsg={setNewMsg} />
      </div>

      <div className="postcontainer">
        <h2>Les derniers messages</h2>
        <CompilMessage newMsg={newMsg} setNewMsg={setNewMsg}/>
      </div>
    </>
  );
};

export default Home;
