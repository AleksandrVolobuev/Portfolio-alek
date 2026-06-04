import React, { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import OdometerCounter from "../utilities/OdometerCounter";
import TypedText from "../utilities/TypedText";
import { assetPath } from "../../utils/assetPath";
import "../../scss/template/section/hero/_hero-section-one.scss";
import "../../scss/utilites/_animation.scss";

const HeroSection = () => {
  const { t } = useTranslation();
  const { ref: heroRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const typedTextStrings = useMemo(() => [t("name"), t("profession")], [t]);
  
  const renderHeroButton = () => (
    <div className="hero-btn">
      <a href="https://github.com/AleksandrVolobuev" className="">
        <span className="link-effect">
          <span className="effect-1">{t("view_works")}</span>
        </span>
      </a>
    </div>
  );

  const renderHeroExperience = () => (
    <div className="hero-exprience">
      <div className="work-compeleted">
        <div className="count-box">
          {inView && <OdometerCounter value={90} />}
          <span>0+</span>
        </div>
        <p className="text">{t("completed_works")}</p>
      </div>
      <div className="work-process">
        <a
          className="popup-video"
          href="https://github.com/AleksandrVolobuev"
          data-fancybox="video-gallery"
        >
          <div className="inner-popup d-flex align-items-center">
            <span className="icon">
              <i className="fa-solid fa-play"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  );

  const renderHeroRightText = () => (
    <div className="right-text">
      <div className="img-shape spin2 mb-30">
        <img src={assetPath("/images/shape/9.png")} alt="Shape" loading="lazy" />
      </div>
      <span className="text-1">{t("expert_on")}</span>
      <p className="text-2 mt-15 mb-20">
        {t("based_on")} <br />
        {t("hero_title")} <br />
        {t("webflow")}
      </p>
      <a
        href="#"
        className="download-btn"
        data-text={t("view_works")}
      >
        {t("download_cv")}
        <i className="fa-regular fa-arrow-down-to-line"></i>
      </a>
    </div>
  );

  const renderHeroImages = () => (
    <>
      <div className="hero-img lm-d-none">
        <img src={assetPath("/images/hero/hero1.png")} alt="Hero" loading="lazy" />
      </div>
      <div className="hero-image-shape lm-d-none">
        <img src={assetPath("/images/shape/1.png")} alt="Shape" loading="lazy" />
      </div>
      <div className="hero-shape jump3">
        <img src={assetPath("/images/shape/8.png")} alt="Shape" loading="lazy" />
      </div>
      <div className="hero-work-shape upDown">
        <img src={assetPath("/images/shape/2.png")} alt="Shape" loading="lazy" />
      </div>
    </>
  );

  return (
    <section className="hero-section pb-270" id="top" ref={heroRef}>
      <div className="container">
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-left">
              <div className="pb-20">
                <h1 className="title">
                  {t("hello")}{" "}
                  <span role="img" aria-label="wave">
                    🖐
                  </span>
                </h1>
                <div className="type-text">
                  {t("i_am")}{" "}
                  <span className="typed-color">
                    <TypedText strings={typedTextStrings} />
                  </span>
                </div>
              </div>
              <div className="pb-30">
                <h2 className="hero-title" data-delay=".7">
                  {t("hero_title")} <br />
                  <span>{t("based_on")}</span>
                </h2>
              </div>
              {renderHeroButton()}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-right">
              <div className="hero-right-text">
                {renderHeroRightText()}
                {renderHeroExperience()}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Images and Shapes */}
        {renderHeroImages()}
      </div>
    </section>
  );
};

export default HeroSection;
