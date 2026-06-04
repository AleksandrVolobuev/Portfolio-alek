import React from "react";
import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";

import "../../scss/reset/_mobile-menu.scss";
import "../../scss/utilites/_animation.scss";

const MobileMenu = ({ onClose, visible }) => {
  const { t } = useTranslation();

  return (
    <div className={`mobile-menu-wrapper ${visible ? "body-visible" : ""}`}>
      <div className="mobile-menu-area">
        <button
          type="button"
          className="menu-toggle"
          aria-label={t("mobile.close")}
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="mobile-logo">
          <a href={assetPath("")} aria-label={t("mobile.home")}>
            <img
              src={assetPath("/images/logo/Alek2.png")}
              alt={t("mobile.logoAlt")}
              width="150"
              height="auto"
            />
          </a>
        </div>

        <nav
          className="mobile-menu"
          aria-label={t("mobile.aria")}
        >
          <ul className="navigation clearfix">
            <li><a href={assetPath("")}>{t("nav.home")}</a></li>
            <li><a href="#about">{t("nav.about")}</a></li>
            <li><a href="#service">{t("nav.services")}</a></li>
            <li><a href="#portfolio">{t("nav.works")}</a></li>
            <li><a href="#blog">{t("nav.blog")}</a></li>
            <li><a href="#contact">{t("nav.contact")}</a></li>
          </ul>
        </nav>

        <div className="sidebar-wrap">
          <address>
            <p>{t("contact.address")}</p>
          </address>
        </div>

        <div className="sidebar-wrap">
          <p>
            <a href="tel:+380990904881">
              {t("contact.phone")}
            </a>
          </p>
          <p>
            <a href="mailto:aleksandrvolobuev7676@gmail.com">
              {t("contact.email")}
            </a>
          </p>
        </div>

        <div className="social-btn style3" role="list">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/AleksandrV10201" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" aria-label="Dribbble">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
