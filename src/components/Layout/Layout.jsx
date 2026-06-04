import { useState } from "react";
import Header from "../Header/Header";

import "./Layout.scss";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="layout">
      <div className="page-wrapper overflow-visible">
        <Header toggleMenu={toggleMenu} />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
