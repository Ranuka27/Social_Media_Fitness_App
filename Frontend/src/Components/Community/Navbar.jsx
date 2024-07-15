import React from "react";
import "../../Styles/navbar.css";
import { useSnapshot } from "valtio";
import state from "../../Utils/Store";
import NotificationsDropdown from "./NotificationsDropdown";
const Navbar = () => {
  const snap = useSnapshot(state);
  const currentUser = snap.currentUser;

  return (
    <nav id="nav-bar">
      <div className="left">
        <div className="logo">
          <img alt="alt-tag" src="assets/logo.png" />
        </div>
      </div>

      <div className="right">
        <NotificationsDropdown />
        <img
          onClick={() => {
            state.profileModalOpend = true;
          }}
          alt="alt-tag"
          src={currentUser?.image}
        />
      </div>
    </nav>
  );
};

export default Navbar;
