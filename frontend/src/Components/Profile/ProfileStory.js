import React, { useState } from "react";

const ProfileStory = ({setStoryTxt, storyTxt}) => {
  
  const storyUpdate = (e) => {
    setStoryTxt(e.target.value)
  };

  return (
    <textarea
      name="story"
      className="profile_story"
      placeholder="Votre présentation ..."
      onChange={storyUpdate}
      value={storyTxt}
    ></textarea>
  );
};

export default ProfileStory;
