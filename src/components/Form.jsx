import React from "react";

const Form = ({ name, onSubmit, title, submitButtonText, children }) => {
  return (
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
  );
};

export default Form;
