import React, { useState, useEffect, useCallback, memo } from "react";
import HeaderStyleOne from "./HeaderStyleOne";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import StickyHeader from "./StickyHeader";
import "../../scss/template/headers/_header-style-one.scss";
import "../../scss/template/headers/_header-style-two.scss";

const Header = memo(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Оптимизированный обработчик скролла с throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Мемоизированный обработчик клика бургера
  const handleBurgerClick = useCallback(() => {
    if (window.innerWidth > 991) {
      setIsSidebarOpen((prev) => {
        if (!prev) setIsMobileMenuOpen(false);
        return !prev;
      });
    } else {
      setIsMobileMenuOpen((prev) => {
        if (!prev) setIsSidebarOpen(false);
        return !prev;
      });
    }
  }, []);

  // Мемоизированные обработчики закрытия
  const handleSidebarClose = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <HeaderStyleOne onBurgerClick={handleBurgerClick} />
      {isSidebarOpen && <Sidebar onClose={handleSidebarClose} />}
      {isMobileMenuOpen && (
        <MobileMenu
          onClose={handleMobileMenuClose}
          visible={isMobileMenuOpen}
        />
      )}
      {isSticky && <StickyHeader isSticky={isSticky} />}
    </>
  );
});

Header.displayName = 'Header';

export default Header;