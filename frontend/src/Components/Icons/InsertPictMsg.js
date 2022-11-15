import React from "react";

const InsertPictMsg = ({ setMsgPict, setPictFile, setMsgError }) => {
  const mimeType = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
  };
  const insertPicture = (e) => {
    const mimeTypePicture = mimeType[e.target.files[0].type];
    if (e.target.files[0].size > 5000000) {
      setMsgError("Ce fichier est trop volumineux ! (Max 5 Mo)");
      setPictFile();
      setMsgPict("");
    } else if (mimeTypePicture === undefined) {
      setMsgError(
        "Les images acceptées doivent être au format .jpg, .jpeg ou .png"
      );
      setPictFile();
      setMsgPict("");
    } else {
      setMsgPict(URL.createObjectURL(e.target.files[0]));
      setPictFile(e.target.files[0]);
      setMsgError("");
    }
  };

  return (
    <>
    <div className="insertpicture">
    <i className="homecontainer_navbarmessage--btn fa-regular fa-image icon"></i>
      <input
        type="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={insertPicture}
        className="homecontainer_navbarmessage--input"
        />
        </div>
    </>
  );
};

export default InsertPictMsg;
