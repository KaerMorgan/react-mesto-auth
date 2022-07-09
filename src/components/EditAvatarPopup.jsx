import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpened, onClose, onUpdateAvatar }) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.value = "";
  }, [isOpened]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: `${inputRef.current.value}`,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitButtonText="Сохранить"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input"
          id="avatar-input-link"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          ref={inputRef}
          required
        />
        <span
          className="popup__input-error"
          id={"avatar-input-link-error"}
        ></span>
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
