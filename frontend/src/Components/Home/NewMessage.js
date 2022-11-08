import React, { useState } from "react";
import InsertPictMsg from "../Icons/InsertPictMsg";
import { useSelector, useDispatch } from "react-redux";
import { NEW_MESSAGE } from "../../SliceReducers/slice.user";
import { ADD_MESSAGE } from "../../SliceReducers/slice.message";

const NewMessage = ({setNewMsg}) => {
  const [message, setMessage] = useState("");
  const [msgPict, setMsgPict] = useState("");
  const [pictFile, setPictFile] = useState();
  const [msgError, setMsgError] = useState("");

  const user = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();

  const messageInput = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const msgData = new FormData();
    msgData.append("authorId", user._id);
    msgData.append("messageTxt", message);

    if (pictFile) {
      msgData.append("file", pictFile);
    }

    async function fetchNewMessage() {
      try {
        const reponse = await fetch(
          `${process.env.REACT_APP_API_MSG}/newPost`,
          {
            method: "POST",
            body: msgData,
            headers: { Authorization: `Bearer ${user.token}` }}
        );
        const reponseJSON = await reponse.json();
        console.log('ReponseJSON newMessage: ', reponseJSON._id)

        dispatch(NEW_MESSAGE(reponseJSON._id))

        dispatch(ADD_MESSAGE(reponseJSON))

          setNewMsg(true)
        setMessage("");
        setMsgPict("");
        setPictFile();
        setMsgError('');
      } catch (error) {
        console.log(error);
      }
    }
    fetchNewMessage();
  };

  return (
    <>
      <div className="homecontainer_newmessage">
        <h2>Envoyer un nouveau message ...</h2>
        <textarea
          name="message"
          className="homecontainer_newmessage--text"
          placeholder="Votre message ..."
          onChange={messageInput}
          value={message}
        />

        <div className="homecontainer_newmessage--picture">
          {msgPict ? <img src={msgPict} alt="message" /> : ""}
        </div>

        <div className="homecontainer_error">{msgError}</div>
      </div>

      <div className="homecontainer_navbarmessage">
        <InsertPictMsg setMsgPict={setMsgPict} setPictFile={setPictFile} setMsgError={setMsgError} />

        <i
          className="fa-regular fa-envelope homecontainer_navbarmessage--btn icon"
          title="Envoyer"
          onClick={sendMessage}
        ></i>
      </div>
    </>
  );
};

export default NewMessage;
