import React from 'react';

import image from '../../Assets/post001.jpg'

const PostMessage = () => {
  return (
    <div className='postcard_message'>
      <div className='postcard_message--text'>Le texte du message</div>
      <div className='postcard_message--picture'>
      <img src={image} />
      </div>
      <div className='postcard_message--navbar'>
      <i className="fa-solid fa-heart icon" title="Like"></i>
      </div>
    </div>
  );
}

export default PostMessage;
