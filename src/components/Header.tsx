import React from 'react';
import logo from '../assets/bhiveWorkSpace.svg';
import callImage from "../assets/callImage.svg"
const Header = () => {
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <img src={logo} alt="BHIVE Workspace" className="logo" />
        {/* <a href="tel:+1234567890" className="phone-link"> */}
          <img className="phone-link-img" src={callImage}></img>
          {/* <span className="phone-icon">📞</span> */}
        {/* </a> */}
      </div>
    </nav>
  );
};

export default Header; 