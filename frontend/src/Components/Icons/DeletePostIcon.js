import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_MESSAGE } from '../../SliceReducers/slice.message';
import { DELETE_POSTREF } from '../../SliceReducers/slice.user';

const DeletePostIcon = ({user, post}) => {

  const dispatch = useDispatch();

const deletePost = () => {
  if (window.confirm('Veuillez confirmer la suppression du message !')) {
    const bodyRequest = {
      id: user._id
    }

    async function deleteMessage() {
      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_IMG}/${post._id}`, {
          method: 'DELETE',
          body: JSON.stringify(bodyRequest),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          }
        })
        console.log(reponse);
        dispatch(DELETE_MESSAGE(post._id));
        dispatch(DELETE_POSTREF(post._id))
        
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
