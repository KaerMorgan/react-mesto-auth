import React from "react";
import registrationSuccess from "../images/registration-success.png";
import registrationFail from "../images/registration-fail.png";
import CloseButton from "./CloseButton";

const InfoTooltip = ({ success, onClose, isOpened }) => {
  return (
    <div className={`popup popup_type_tooltip ${isOpened && "popup_opened"}`}>
      <div className="popup__container">
        <CloseButton onClose={onClose} />
        {success ? (
          <>
            <img
              src={registrationSuccess}
              alt="Успех!"
              className="popup__registration-image"
            />
            <h3 className="popup__heading">Вы успешно зарегистрировались!</h3>
          </>
        ) : (
          <>
            <img
              src={registrationFail}
              alt="Успех!"
              className="popup__registration-image"
            />
            <h3 className="popup__heading">
              Что-то пошло не так! Попробуйте ещё раз.
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoTooltip;
