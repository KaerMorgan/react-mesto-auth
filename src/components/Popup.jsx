import React from "react";
import CloseButton from "./CloseButton";

const Popup = ({ name, isOpened, onClose, children, photoViewClass }) => {
  React.useEffect(() => {
    if (!isOpened) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpened, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${
        photoViewClass ? `${photoViewClass}` : `popup_type_${name}`
      } ${isOpened ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >
      {/* закрытие по обёртке */}
      <div
        className={`${
          photoViewClass ? "photo-view__container" : "popup__container"
        }`}
      >
        {children}
        <CloseButton onClose={onClose} />
      </div>
    </div>
  );
};

export default Popup;
