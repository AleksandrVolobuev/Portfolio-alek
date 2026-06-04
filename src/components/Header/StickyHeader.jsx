import React from "react";
import HeaderLogo from "./HeaderLogo";
import MenuItems from "./MenuItems";
import "../../scss/template/headers/_header-style-one.scss";
import "../../scss/template/headers/_header-style-two.scss";
import "../../scss/reset/_container.scss";

const StickyHeader = ({ isSticky }) => (
  <header
    className={`sticky-header ${isSticky ? 'fixed-header' : ''}`}
    role="banner"
  >
    <div className="container">
      <nav className="menu-area" role="navigation" aria-label="Main navigation">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto logo">
            <HeaderLogo />
          </div>
          <div className="col-auto nav-menu">
            <MenuItems />
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default StickyHeader;
