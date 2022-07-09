import React from "react";
import PopupWithForm from "./PopupWithForm";
import InputWithLabel from "./InputWithLabel";

const AddPlacePopup = ({ isOpened, onClose, onAddPlace }) => {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpened]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      submitButtonText="Создать"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <InputWithLabel
        name="name"
        id="add-input-name"
        type="text"
        placeholder="Название"
        value={name}
        onChange={setName}
      />
      <InputWithLabel
        name="link"
        id="add-input-link"
        type="url"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={setLink}
      />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
