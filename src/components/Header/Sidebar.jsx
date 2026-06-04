import React from "react";
import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";

import "../../scss/template/headers/_header-style-two.scss";
import "../../scss/template/widget/_widget.scss";
import "../../scss/utilites/_animation.scss";

const Sidebar = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <aside
      id="sidebar-area"
      className="sidebar open-sidebar"
      aria-label={t("sidebar.aria")}
    >
      <div
        className="sidebar-overlay"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label={t("sidebar.closeOverlay")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
      />

      <div
        className="sidebar-wrapper"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebarTitle"
      >
        <button
          type="button"
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label={t("sidebar.close")}
        >
          ×
        </button>

        <div className="sidebar-content">
          <div className="sidebar-logo">
            <a className="dark-logo" href={assetPath("")} aria-label={t("sidebar.home")}>
              <img src={assetPath("/images/logo/Alek2.png")} alt="Logo" />
            </a>
          </div>

          <nav className="sidebar-menu-wrap" aria-label={t("sidebar.menu")}>
            {/* навигация */}
          </nav>

          <section className="sidebar-about">
            <h3 className="sidebar-header">{t("sidebar.about.title")}</h3>
            <p>{t("sidebar.about.text")}</p>
            <a href="#contact" className="theme-btn">
              {t("sidebar.about.button")}
            </a>
          </section>

          <section className="sidebar-contact">
            <h3 className="sidebar-header">{t("sidebar.contact.title")}</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>{t("sidebar.contact.address")}</span>
              </li>
              <li>
                <i className="fas fa-phone" aria-hidden="true"></i>
                <a href="tel:+380990904881">
                  {t("sidebar.contact.phone")}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                <a href="mailto:aleksandrvolobuev7676@gmail.com">
                  {t("sidebar.contact.email")}
                </a>
              </li>
            </ul>
          </section>

          <ul className="sidebar-social" aria-label={t("sidebar.social")}>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
