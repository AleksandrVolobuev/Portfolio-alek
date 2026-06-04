import React from "react";
import TypedText from "../utilities/TypedText";
import "../../scss/template/section/service/_service.scss";
import OdometerCounter from "../utilities/OdometerCounter";
import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";

const servicesData = [
  { id: 1, titleKey: "service_website_dev", projectsKey: "service_projects", image: "/images/service/1.png" },
  { id: 2, titleKey: "service_uiux", projectsKey: "service_projects", image: "/images/service/2.png" },
  { id: 3, titleKey: "service_digital_marketing", projectsKey: "service_projects", image: "/images/service/3.png" },
  { id: 4, titleKey: "service_website_dev", projectsKey: "service_projects", image: "/images/service/1.png" },
  { id: 5, titleKey: "service_uiux", projectsKey: "service_projects", image: "/images/service/2.png" },
  { id: 6, titleKey: "service_digital_marketing", projectsKey: "service_projects", image: "/images/service/3.png" },
];

const countersData = [
  { count: 250, textKey: "completed_works", suffix: "+" },
  { count: 100, textKey: "satisfied_clients", suffix: "+" },
  { count: 100, textKey: "clients_rating_rate_percent", suffix: "%" },
  { count: 3000, textKey: "clients_rating_rate_plus", suffix: "+" },
];

const ServiceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="service-section space" id="service">
      <div className="container">
        <div className="row gy-50">
          {/* Левая колонка */}
          <div className="col-lg-6">
            <div className="service-content">
              <div className="title-area">
                <div className="sub-title">
                  <i className="icon fa-brands fa-gg"></i>{t("services")}
                </div>
                <h2 className="sec-title">
                  <span style={{ visibility: "hidden", position: "absolute" }}>
                    {t("feature_typed_text")}
                  </span>
                  <TypedText strings={[t("feature_typed_text")]} />
                </h2>
              </div>

              <div className="counter-box_grid">
                {countersData.map((item, index) => (
                  <div className="count-item" key={index}>
                    <div className="count-box">
                      <OdometerCounter value={item.count} />
                      <span className="suffix">{item.suffix}</span>
                    </div>
                    <p className="text">{t(item.textKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="col-lg-6">
            <div className="service-wheel">
              {servicesData.map((service, index) => (
                <div
                  className="service-item"
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="service-thumb">
                    <img src={assetPath(service.image)} alt={t(service.titleKey)} />
                  </div>
                  <div className="service-content">
                    <h2 className="title">{t(service.titleKey)}</h2>
                    <h3 className="service-sub-title">{t(service.projectsKey)}</h3>
                    <a href="#" className="service-btn">
                      <span className="title">{t("view_service")}</span>
                      <i className="fa-light fa-arrow-right-long fa-fw"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
