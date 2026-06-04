import React from "react";
import { useTranslation } from "react-i18next";
import TypedText from "../utilities/TypedText"; // исправил путь на правильный (скорее всего, у тебя папка 'utilities', не 'utilites')
import { assetPath } from "../../utils/assetPath";
import "../../scss/template/section/feture/_feature.scss";

const FeatureSection = () => {
  const { t } = useTranslation();

  const services = [
    { className: "div-1", text: t("service_web") },
    { className: "div-2", text: t("service_uiux") },
    { className: "div-3", text: t("service_seo") },
    { className: "div-4", text: t("service_marketing") },
  ];

  const typedStrings = [t("feature_typed_text")];

  return (
    <section className="feture-section space">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="title-area">
              <div className="sub-title">
                <i className="icon fa-brands fa-gg"></i> {t("services")}
              </div>
              <h2 className="sec-title">
                <TypedText strings={typedStrings} />
              </h2>
              <a href="#" className="feature-link">
                {t("all_services")}
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="feature-list">
              {services.map((service, index) => (
                <li className={service.className} key={index}>
                  <a href="#">
                    <img
                      src={assetPath("/images/icons/service-icon.png")}
                      alt={service.text}
                    />
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
