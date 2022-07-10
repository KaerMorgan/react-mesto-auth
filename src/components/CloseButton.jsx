import React from "react";
import buttonClose from "../images/button_close.svg";

const CloseButton = ({ onClose }) => {
  return (
    <button type="button" className="popup__close" onClick={onClose}>
      <img
        className="popup__close-icon"
        src={buttonClose}
        alt="Закрыть форму"
      />
    </button>
  );
};

export default CloseButton;
