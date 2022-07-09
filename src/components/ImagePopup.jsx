import React from "react";
import CloseButton from "./CloseButton";

const ImagePopup = (props) => {
  return (
    <div className={`popup photo-view ${props.card._id && "popup_opened"}`}>
      <div className="photo-view__container">
        <CloseButton onClose={props.onClose} />
        <img
          src={props.card.link}
          alt={props.card.name}
          className="photo-view__image"
        />
        <h3 className="photo-view__caption">{props.card.name}</h3>
      </div>
    </div>
  );
};

export default ImagePopup;
