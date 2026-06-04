
import React from "react";
import HeaderLogo from "./HeaderLogo";
import MenuItems from "./MenuItems";
import { assetPath } from "../../utils/assetPath";
import "../../scss/template/headers/_header-style-one.scss";
import "../../scss/reset/_container.scss";

const HeaderStyleOne = ({ onBurgerClick }) => {
  return (
    <header className="header-style-one">
      <div className="sticky-wrapper">
        <div className="container">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto logo">
                <HeaderLogo />
              </div>
              <div className="col-auto nav-menu">
                <MenuItems />
                <button className="header__navicon-2 menu-toggle" onClick={onBurgerClick}>
                  <img src={assetPath("/images/logo/menu-icon-white.png")} alt="menu-icon" />
                </button>
              </div>
              <div className="col-auto header-right-wrapper">
                <button className="sidebar-trigger open" onClick={onBurgerClick}>
                  <img src={assetPath("/images/logo/header-menu-icon.png")} alt="menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderStyleOne;
