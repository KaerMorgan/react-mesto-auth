import React from "react";
import Form from "./Form";
import Popup from "./Popup";

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
    <Popup isOpened={isOpened} name={name} onClose={onClose}>
      <Form
        name={name}
        onSubmit={onSubmit}
        title={title}
        submitButtonText={submitButtonText}
      >
        {children}
      </Form>
    </Popup>
  );
};

export default PopupWithForm;
