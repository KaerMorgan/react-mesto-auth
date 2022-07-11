import React from "react";
import headerLogo from "../images/header__logo.svg";
import burger from "../images/hamburger.png";
import HeaderAuthGroup from "./HeaderAuthGroup";
import buttonClose from "../images/button_close.svg";

function Header({ isLoggedIn, email, onExit }) {
  const [width, setWidth] = React.useState(0);
  const [isMenuShown, setIsMenuShown] = React.useState(false);

  function resize() {
    setWidth(window.innerWidth);
    if (width > 580) {
      setIsMenuShown(false);
    }
  }

  function handleMenuClick() {
    setIsMenuShown(!isMenuShown);
  }

  React.useEffect(() => {
    window.addEventListener("resize", resize);
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [width]);

  return (
    <>
      {isMenuShown && isLoggedIn && (
        <HeaderAuthGroup
          isLoggedIn={isLoggedIn}
          email={email}
          onExit={onExit}
          width={width}
        />
      )}
      <header className="header">
        <img src={headerLogo} alt="Место" className="header__logo" />
        {width <= 580 && isLoggedIn ? (
          <img
            className="header__burger-image"
            onClick={handleMenuClick}
            src={isMenuShown ? buttonClose : burger}
            alt={isMenuShown ? "Закрыть меню" : "Меню"}
          />
        ) : (
          <HeaderAuthGroup
            isLoggedIn={isLoggedIn}
            email={email}
            onExit={onExit}
          />
        )}
      </header>
    </>
  );
}

export default Header;
