import React from 'react';

const EditPostIcon = ({setEditPost, editPost, setEditMessage, editMessage, user, post }) => {

  const editHandle = () => {
    setEditPost(true)
    setEditMessage(editMessage)
  }

  const validEditPost = () => {
    console.log('message édité: ', editMessage)

    const bodyRequest = {
      id: user._id,
      messageTxt: editMessage
    }

    async function fetchUpdateMessage() {
      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_MSG}/${post._id}`, {
        method: 'PUT',
        body: JSON.stringify(bodyRequest),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        }
      })
      console.log('Reponse fetchUpdateMessage: ',reponse)
      setEditPost(false)

      } catch(error) {console.log(error)}
    }
    fetchUpdateMessage();
  }

  const abortEditPost = () => {
    setEditPost(false)
  }

  return editPost ? (
    <>
      <i className="fa-solid fa-check-double icon " title='Valider la modification' onClick={validEditPost}></i>

      <i className="fa-regular fa-rectangle-xmark icon " title='Annuler la modification' onClick={abortEditPost}></i>
    </>
  ) : (
    <>
      <i
      className="fa-regular fa-pen-to-square icon"
      title="Editer le message"
      onClick={editHandle}
    ></i>

    </>
  );
}

export default EditPostIcon;
