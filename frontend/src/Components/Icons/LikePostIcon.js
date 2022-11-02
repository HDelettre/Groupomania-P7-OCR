import React from 'react';

const LikePostIcon = () => {

const likedBy = () => {}

  return (
    <>
    <i
                  className="fa-regular fa-heart icon"
                  title="J'aime"
                  onClick={likedBy}
                ></i>
    </>
  );
}

export default LikePostIcon;


//<i className="fa-solid fa-heart icon" title="Je n'aime plus" onClick={likedBy} ></i>