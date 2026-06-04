// HeaderLayout.jsx
import React, { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import StickyHeader from "./StickyHeader";
import Sidebar from "./Sidebar";

import "../../scss/template/headers/_header-style-one.scss";
import "../../scss/template/headers/_header-style-two.scss";

const HeaderLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#service", label: "Services" },
    { href: "#portfolio", label: "Works" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <Header
        onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
        onSidebarToggle={() => setIsSidebarOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
      />

      <StickyHeader menuItems={menuItems} />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
};

export default HeaderLayout;
