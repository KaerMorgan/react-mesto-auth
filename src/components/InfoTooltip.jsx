import React from "react";
import registrationSuccess from "../images/registration-success.png";
import registrationFail from "../images/registration-fail.png";
import Popup from "./Popup";

const InfoTooltip = ({ success, onClose, isOpened }) => {
  return (
    <Popup onClose={onClose} isOpened={isOpened} name="tooltip">
      <img
        src={success ? registrationSuccess : registrationFail}
        alt={success ? "Успех!" : "Ошибка"}
        className="popup__registration-image"
      />
      <h3 className="popup__heading">
        {success
          ? "Вы успешно зарегистрировались!"
          : "Что-то пошло не так! Попробуйте ещё раз."}
      </h3>
    </Popup>
  );
};

export default InfoTooltip;
