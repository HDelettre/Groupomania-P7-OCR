import React from "react";
import { useDispatch } from "react-redux";

// Import Slice reducer
import { UPDATE_MESSAGE } from "../../SliceReducers/slice.message";

const EditPostIcon = ({
  setEditPost,
  editPost,
  setEditMessage,
  editMessage,
  user,
  post,
}) => {
  const dispatch = useDispatch();

  const editHandle = () => {
    setEditPost(true);
    setEditMessage(editMessage);
  };

  const validEditPost = () => {
    const bodyRequest = {
      id: user._id,
      messageTxt: editMessage,
    };

    async function fetchUpdateMessage() {
      try {
        const reponse = await fetch(
          `${process.env.REACT_APP_API_MSG}/${post._id}`,
          {
            method: "PUT",
            body: JSON.stringify(bodyRequest),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log("Reponse fetchUpdateMessage: ", reponse);
        dispatch(UPDATE_MESSAGE([post._id, editMessage]));
        setEditPost(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUpdateMessage();
  };

  const abortEditPost = () => {
    setEditMessage(post.messageTxt);
    setEditPost(false);
  };

  return editPost ? (
    <>
      <i
        className="fa-solid fa-check-double icon "
        title="Valider la modification"
        onClick={validEditPost}
      ></i>

      <i
        className="fa-regular fa-rectangle-xmark icon "
        title="Annuler la modification"
        onClick={abortEditPost}
      ></i>
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
};

export default EditPostIcon;
