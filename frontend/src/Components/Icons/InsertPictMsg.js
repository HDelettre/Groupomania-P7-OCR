import React from 'react';

const InsertPictMsg = ({setMsgPict, setPictFile}) => {

  const insertPicture = (e) => {
    setMsgPict(URL.createObjectURL(e.target.files[0]));
    setPictFile(e.target.files[0]);
  };

  return (
    <>
      <i
        className="fa-regular fa-image homecontainer_navbarmessage--btn icon"
        title="Insérer une image"
      ></i>

      <input type='file' name='file' accept='.jpg, .jpeg, .png' onChange={insertPicture} className='homecontainer_navbarmessage--input'/>
    </>
  );
}

export default InsertPictMsg;
