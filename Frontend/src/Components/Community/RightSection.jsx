import React from "react";
import "../../Styles/right_section.css";
import Contacts from "./Contacts";
const RightSection = () => {
  return (
    <div className="right">
      <div className="first_warpper">
        <div className="page">
          <h2>Your Pages and profiles</h2>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>

        <div className="page_img">
          <img alt="alt-tag" src="image/page.jpg" />
          <p>Web Designer</p>
        </div>

        <div className="page_icon">
          <i className="fa-regular fa-bell"></i>
          <p>20 Notifications</p>
        </div>

        <div className="page_icon">
          <i className="fa-solid fa-bullhorn"></i>
          <p>Create promotion</p>
        </div>
      </div>

      <hr />

      <hr />
    </div>
  );
};

export default RightSection;
