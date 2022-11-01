import React from "react";

// Import components
import Header from "../Header/Header";
import CompilMessage from "./CompilMessage";
import HomeUp from "./HomeUp";

const Home = ({ connectId }) => {
  return (
    <>
      <Header />

      <div className="homecontainer">
        <HomeUp connectId={connectId} />
      </div>

      <div className="postcontainer">
        <h2>Les derniers messages</h2>
        <CompilMessage />
      </div>
    </>
  );
};

export default Home;
