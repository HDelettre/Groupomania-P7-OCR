import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import Components
import Header from "../Header/Header";
import SpinLoader from "../SpinLoader/SpinLoader";
import ProfileResume from "./Profile.Resume";
import NewMessage from "./New.Message";
import MessageContainer from "./Message.Container";

// Import Reducer
import { GET_MESSAGE } from "../../SliceReducers/slice.message";

// Component
const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  async function fetchAllMessage() {
    console.log('FETCHALLMESSAGE')
    
    setIsLoading(true);
    try {
      const reponse = await fetch(`${process.env.REACT_APP_API_MSG}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log('REPONSE FETCH: ', reponse)
      const reponseJSON = await reponse.json();
      dispatch(GET_MESSAGE(JSON.parse(JSON.stringify(reponseJSON))))
    } catch (error) {
      console.log(error);
    }

  }
  if (isLoading && user) {
    fetchAllMessage();
    setIsLoading(false)
  }

  return (
    <>
      <Header />

      {isLoading ? (
        <SpinLoader />
      ) : (
        <>
          <div className="homecontainer">
            <ProfileResume />

            <NewMessage />
          </div>

            <MessageContainer user={user} />
            
        </>
      )}
    </>
  );
};

export default HomeContainer;