import React from "react";
import Popup from "./Popup";

const ImagePopup = ({ card, onClose, photoViewClass }) => {
  return (
    <Popup
      isOpened={!!card._id}
      photoViewClass={photoViewClass}
      onClose={onClose}
    >
      <img src={card.link} alt={card.name} className="photo-view__image" />
      <h3 className="photo-view__caption">{card.name}</h3>
    </Popup>
  );
};

export default ImagePopup;
