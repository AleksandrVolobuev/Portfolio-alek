// components/Header/HeaderStyleTwo.jsx
import React from "react";
import HeaderLogo from "./HeaderLogo";
import MenuItems from "./MenuItems";
import HeaderSearch from "./HeaderSearch";
import Copyright from "./Copyright";
import "../../scss/template/headers/_header-style-two.scss";

const HeaderStyleTwo = ({ closeMenu }) => (
  <div className="header-style-two">
    <div className="header-inner-one">
      <div className="nav-icon" onClick={closeMenu}>
        <div className="close">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <HeaderLogo />
      <nav className="header-nav">
        <MenuItems />
      </nav>
      <HeaderSearch />
      <Copyright />
    </div>
  </div>
);

export default HeaderStyleTwo;
