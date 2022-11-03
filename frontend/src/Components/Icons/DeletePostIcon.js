import React from 'react';


const DeletePostIcon = ({user, post, setDelMsg}) => {

  

const deletePost = () => {
  if (window.confirm('Veuillez confirmer la suppression du message !')) {
    const bodyRequest = {
      id: user._id
    }

    async function deleteMessage() {
      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_MSG}/${post._id}`, {
          method: 'DELETE',
          body: JSON.stringify(bodyRequest),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          }
        })
        console.log(reponse);
        setDelMsg(true)
        
      } catch (error) {console.log(error)}
    }
    deleteMessage();
  }
}

  return (
    <>
      <i
                className="fa-solid fa-trash icon"
                title="Supprimer le message"
                onClick={deletePost}
              ></i>
    </>
  );
}

export default DeletePostIcon;
