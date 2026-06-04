import React from "react";
import { assetPath } from "../../utils/assetPath";

const HeaderLogo = () => (
  <div className="header-logo">
    <a href="index.html">
      <img src={assetPath("/images/logo/Alek2.png")} className="show-dark" alt="site-logo" />
    </a>
  </div>
);

export default HeaderLogo;
