import React, { useState } from "react";

const ProfileStory = ({setStoryTxt, storyTxt, setUpdateProfile, updateProfile}) => {

  const editStory = (e) => {
    setStoryTxt(e.target.value)
  }
  

  return !updateProfile ? (
    <div className="profile_story">
      {storyTxt}
    </div>
  ) : (
    <textarea
      name="story"
      className="profile_story"
      placeholder="Votre présentation ..."
      onChange={editStory }
      value={storyTxt}
    ></textarea>
  );
};

export default ProfileStory;
