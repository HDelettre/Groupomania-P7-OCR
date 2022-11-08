import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Import Components
import SpinLoader from "../SpinLoader/SpinLoader";
import ProfileResume from "../Home/Profile.Resume";
import NewMessage from "../Home/New.Message";
import PostContainer from "./Post.Container";

const Home = () => {
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoadingMessage, setIsLoadingMessage] = useState(true);

  const [user, setUser] = useState('');


  

  return (
    <>
      HOME

     
    </>
  );
};

export default Home;
