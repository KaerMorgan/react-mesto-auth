import React from "react";
import buttonClose from "../images/button_close.svg";

const CloseButton = (props) => {
  return (
    <button type="button" className="popup__close" onClick={props.onClose}>
      <img
        className="popup__close-icon"
        src={buttonClose}
        alt="Закрыть форму"
      />
    </button>
  );
};

export default CloseButton;
