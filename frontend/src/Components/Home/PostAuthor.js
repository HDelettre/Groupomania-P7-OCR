import React from 'react';

import image from "../../Assets/index.png";

const PostAuthor = () => {

const followUp = () => {};

  return (
    <div className='postcard_author'>
      <img src={image} alt="" />
      
      <h3>Gilles Lerouge</h3>
      
      <i className="fa-solid fa-square-minus icon" title='Déabonner' onClick={followUp}></i>
    </div>
  );
}

export default PostAuthor;
