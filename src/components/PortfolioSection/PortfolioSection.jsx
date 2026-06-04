import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import SpringText from "../utilities/SpringText";
import "../../scss/template/section/portfolio/_portfolio.scss";
import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";

const portfolioItems = [
  {
    id: 1,
    image: "/images/portfolio/Site_Nelly-s-Saloon.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["creative", "web-design","branding"],
    URL: "https://aleksandrvolobuev.github.io/Site_Nelly-s-Saloon/",
  },
  {
    id: 2,
    image: "/images/portfolio/Site_krist-shop.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["branding"],
    URL: "https://github.com/AleksandrVolobuev/Site_krist-shop",
  },
  {
    id: 3,
    image: "/images/portfolio/Site_Bond_construction.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design", "creative","branding"],
    URL: "https://aleksandrvolobuev.github.io/Site_Bond_construction/",
  },
  {
    id: 4,
    image: "/images/portfolio/Site_Bombay_Luxury.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["branding", "creative"],
    URL: "https://aleksandrvolobuev.github.io/Site_Bombay_Luxury/",
  },
  {
    id: 5,
    image: "/images/portfolio/Site_about_mountains.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design","branding", "creative"],
    URL: "https://aleksandrvolobuev.github.io/Site_about_mountains/",
  },
  {
    id: 6,
    image: "/images/portfolio/SHOP_COFE.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design", "creative","branding"],
    URL: "https://aleksandrvolobuev.github.io/SHOP_COFE/",
  },
  {
    id: 7,
    image: "/images/portfolio/nuxt_vue.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["creative","branding"],
    URL: "https://aleksandrvolobuev.github.io/nuxt_vue/",
  },
  {
    id: 8,
    image: "/images/portfolio/Psychologist-Svetlana-Prudnik.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design","branding"],
    URL: "https://aleksandrvolobuev.github.io/Psychologist-Svetlana-Prudnik/",
  },
  {
    id: 9,
    image: "/images/portfolio/mersedes.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design"],
    URL: "https://aleksandrvolobuev.github.io/mersedes/",
  },
  {
    id: 10,
    image: "/images/portfolio/karaokel-project.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design","branding"],
    URL: "https://aleksandrvolobuev.github.io/karaokel-project/",
  },
  {
    id: 11,
    image: "/images/portfolio/game_Snake.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design"],
    URL: "https://aleksandrvolobuev.github.io/game_Snake/",
  },
  {
    id: 12,
    image: "/images/portfolio/game_BlackJack.png",
    titleKey: "portfolio_item_title",
    categoryKey: "portfolio_category_design",
    tags: ["web-design",],
    URL: "https://aleksandrvolobuev.github.io/game_BlackJack/",
  },
];

const PortfolioSection = () => {
  const { t } = useTranslation();
  const [filterKey, setFilterKey] = useState("*");
  const isotope = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    isotope.current = new Isotope(gridRef.current, {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (filterKey === "*") {
      isotope.current.arrange({ filter: "*" });
    } else {
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <section className="portfolio-section space" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area text-center">
              <div className="sub-title">
                <i className="icon fa-brands fa-gg"></i>
                {t("portfolio")}
              </div>
              <SpringText text={t("portfolio_typed_text")} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-filter-buttons mb-40">
            <ul className="menu-filtering">
              <li
                className={filterKey === "*" ? "active" : ""}
                onClick={() => setFilterKey("*")}
              >
                {t("view_all")}
              </li>
              <li
                className={filterKey === "creative" ? "active" : ""}
                onClick={() => setFilterKey("creative")}
              >
                {t("creative")}
              </li>
              <li
                className={filterKey === "web-design" ? "active" : ""}
                onClick={() => setFilterKey("web-design")}
              >
                {t("web_design")}
              </li>
              <li
                className={filterKey === "branding" ? "active" : ""}
                onClick={() => setFilterKey("branding")}
              >
                {t("branding")}
              </li>
            </ul>
          </div>
        </div>

        <div className="row gy-30 image_load" ref={gridRef}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 col-sm-6 grid-item ${item.tags.join(
                " "
              )}`}
            >
              <div className="pdesigner-portfolio__item">
                <a
                  href={item.URL}
                  className="pdesigner-portfolio__image-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={assetPath(item.image)} alt={t(item.titleKey)} />
                </a>
                <div className="pdesigner-portfolio__content">
                  <ul>
                    <li>
                      <a
                        href={item.URL}
                        className="pdesigner-portfolio__title"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t(item.titleKey)}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pdesigner-portfolio__category">
                        {t(item.categoryKey)}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="portfolio-btn">
            <a href="#" className="btn-mask">
              <span>{t("more_works")}</span>
              <i className="fa-solid fa-arrows-rotate"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
