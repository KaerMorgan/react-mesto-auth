import React from "react";
import CloseButton from "./CloseButton";

const PopupWithForm = ({
  name,
  title,
  isOpened,
  onClose,
  submitButtonText,
  children,
  onSubmit,
}) => {
  return (
    <div className={`popup popup_type_${name} ${isOpened && "popup_opened"}`}>
      <div className="popup__container">
        <CloseButton onClose={onClose} />
        <form
          className={`popup__form popup__form_type_${name}`}
          name={`profile-${name}`}
          onSubmit={onSubmit}
        >
          <h3 className="popup__heading">{title}</h3>
          {children}
          <button className="popup__submit" type="submit">
            {submitButtonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
