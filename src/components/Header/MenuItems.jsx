import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "../../utils/assetPath";

const MenuItems = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const MotionList = motion.ul;

  const languages = [
    { code: "en", label: "English", flag: "/images/flags/en.png" },
    { code: "ru", label: "Русский", flag: "/images/flags/ru.png" },
    { code: "ua", label: "Українська", flag: "/images/flags/ua.png" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="header-nav">
      <ul className="navigation">
        <li className="language-selector">
          <button
            className="language-button"
            onClick={() => setIsOpen(!isOpen)}
          >
              <img
      src={assetPath("/images/flags/globe.png")}
      alt="language"
      width="18"
      height="18"
      style={{ marginRight: "8px", verticalAlign: "middle" }}
    /> {t("language_label")}▼
          </button>

          <AnimatePresence>
            {isOpen && (
              <MotionList
                className="sub-menu language-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => changeLanguage(lang.code)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <img
                        src={assetPath(lang.flag)}
                        alt={lang.label}
                        width="20"
                        height="14"
                        style={{ objectFit: "cover" }}
                      />
                      {lang.label}
                    </button>
                  </li>
                ))}
              </MotionList>
            )}
          </AnimatePresence>
        </li>

        <li>
          <a href="#about">
            <i className="fa-regular fa-user"></i>
            {t("about")}
          </a>
        </li>
        <li>
          <a href="#service">
            <i className="fa-regular fa-file-lines"></i>
            {t("services")}
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i className="fa-regular fa-folder"></i>
            {t("works")}
          </a>
        </li>
        <li>
          <a href="#blog">
            <i className="fa-regular fa-file-lines"></i>
            {t("blog_label")}
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa-regular fa-envelope-open"></i>
            {t("contact_label")}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
