import React from "react";

const ProfileStory = ({setStoryTxt, storyTxt, updateProfile, setProfileEdit, setErrorMsg}) => {

  const editStory = (e) => {
    setStoryTxt(e.target.value)
    setProfileEdit(true)
    setErrorMsg('');
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
