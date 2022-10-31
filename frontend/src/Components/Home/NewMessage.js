import React from 'react';

import example from '../../Assets/post001.jpg';

const NewMessage = () => {
  return (
    <>
    <div className='homecontainer_newmessage'>
      <h2>Envoyer un nouveau message ...</h2>
      <textarea className='homecontainer_newmessage--text' defaultValue='Votre message ...'>
      </textarea>

      <div className='homecontainer_newmessage--picture'>
        <img src={example} />
      </div>
      
      <div className='postcard_error'>Ici le message d'erreur</div>
      
    </div>

    <div className='homecontainer_navbarmessage'>
      <i
        className="fa-regular fa-image homecontainer_navbarmessage--btn"
        title="Insérer une image"
      ></i>

      <i className="fa-regular fa-envelope homecontainer_navbarmessage--btn" title='Envoyer'></i>
    </div>
    </>
  );
}

export default NewMessage;
