import React from "react";

const InputWithLabel = ({ id, name, type, placeholder, value, onChange }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <label className="popup__field">
      <input
        className="popup__input"
        id={id}
        name={name}
        type={type}
        value={value || ""}
        minLength="2"
        maxLength={type === "url" ? "300" : "30"}
        placeholder={placeholder}
        onChange={handleChange}
        required
      />
      <span className="popup__input-error" id={`${id}-error`}></span>
    </label>
  );
};

export default InputWithLabel;
