import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SpringText from "../utilities/SpringText";
import { assetPath } from "../../utils/assetPath";
import "../../scss/template/section/pricing/_pricing.scss";

const PricingSection = () => {
  const { t } = useTranslation();
  const [activePlanId, setActivePlanId] = useState(1);

  const pricingPlans = [
    {
      id: 1,
      title: t("basic_plan"),
      price: "16.90",
      period: t("price_period"),
      features: t("features", { returnObjects: true }),
      buttonText: t("choose_plan"),
      image: "/images/icons/pricing-icon1.png",
    },
    {
      id: 2,
      title: t("premium_plan"),
      price: "29.90",
      period: t("price_period"),
      features: t("premium_features", { returnObjects: true }),
      buttonText: t("choose_premium_plan"),
      image: "/images/icons/pricing-icon1.png",
    },
  ];

  return (
    <section className="pricing-section space" id="pricing">
      <div className="container">
        <div className="row gy-30">
          {/* Левая колонка */}
          <div className="col-lg-4">
            <div className="pricing-content">
              <div className="title-area">
                <div className="sub-title">
                  <i className="icon fa-brands fa-gg"></i> {t("pricing")}
                </div>
                <SpringText text={t("pricing_subtitle")} />
              </div>
              <div className="pricing-icon">
                <div className="inner">
                  <img src={assetPath("/images/shape/11.png")} alt="Pricing Icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Карточки тарифов */}
          {pricingPlans.map((plan) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={plan.id}>
              <div
                className={`single-pricing-cart ${activePlanId === plan.id ? "current" : ""}`}
                onClick={() => setActivePlanId(plan.id)}
              >
                <div className="pricing-inner">
                  <div className="pricing-header mb-30">
                    <h3 className="title">
                      <img src={assetPath(plan.image)} alt={plan.title} />
                      {plan.title}
                    </h3>
                    <h2 className="selected">
                      {plan.price} <span>{plan.period}</span>
                    </h2>
                  </div>
                  <div className="pricing-text mb-40">
                    <ul className="pricing-list">
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="pricing-btn">
                      {plan.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
