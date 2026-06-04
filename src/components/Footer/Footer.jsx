import React from "react";
import { useTranslation } from "react-i18next";
import "../../scss/template/section/footer/_footer.scss";

const FooterSection = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { href: "#", icon: "fa-facebook-f", label: t("footer.facebook") },
    { href: "https://x.com/AleksandrV10201", icon: "fa-x-twitter", label: t("footer.twitter") },
    {
      href: "https://www.linkedin.com/in/aleksandr-volobuev-76-ukraine/",
      icon: "fa-linkedin",
      label: t("footer.linkedin"),
    },
    { href: "#", icon: "fa-dribbble", label: t("footer.dribbble") },
    { href: "#", icon: "fa-pinterest-p", label: t("footer.pinterest") },
  ];

  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-main">
              <div className="footer-text">
                <p>{t("footer.follow_me")}</p>
              </div>
              <ul className="footer-social">
                {socialLinks.map(({ href, icon, label }, idx) => (
                  <li key={idx}>
                    <a href={href}>
                      <i className={`fa-brands ${icon}`} aria-hidden="true"></i>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
