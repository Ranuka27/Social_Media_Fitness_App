import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../Modals/AuthModal";

const Header = () => {
  const navigate = useNavigate();
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
  const authButtonClicked = () => {
    if (localStorage.getItem("userId")) {
      navigate("/community");
    } else {
      setIsAuthModalOpened(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/community");
    }
    return () => {}
  });
  
  return (
    <header className="header" id="header">
      <div className="section__container header__container">
        <div className="header__content">
          <h1>HEALTHY LIFE</h1>
          <h2>Empower your soul</h2>
          <p>Unleash your fitness journey—connect, share, and thrive in a community dedicated to health and vitality!</p>
          <div className="header__btn">
            <button onClick={authButtonClicked} className="btn btn__primary">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        onClose={() => {
          setIsAuthModalOpened(false);
        }}
        isOpen={isAuthModalOpened}
      />
    </header>
  );
};

export default Header;
