import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "../../scss/template/section/about/_about.scss";
import TypedText from "../utilities/TypedText";
//import "../../scss/utilites/_animation.scss";
import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";

const AboutSection = () => {
  const { t } = useTranslation();

  // Реф для элемента, к которому применяем tilt
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // угол наклона
        speed: 400, // скорость возврата
        glare: true, // эффект блика
        "max-glare": 0.2, // интенсивность блика
      });
    }
  }, []);

  const aboutList = [
    { className: "div-1", text: t("about_name") },
    { className: "div-2", text: t("about_email") },
    { className: "div-3", text: t("about_phone") },
    { className: "div-4", text: t("about_location") },
  ];

  return (
    <>
      <section className="about-section space" id="about">
        <div className="container">
          <div className="row gy-80">
            <div className="col-lg-6">
              <div className="about-left-img">
                <img
                  src={assetPath("/images/shape/6.png")}
                  className="shape"
                  alt=""
                />
                <div className="about-thumb">
                  <img
                    ref={tiltRef} // применяем tilt
                    src={assetPath("/images/about/img2.png")}
                    className="about-me"
                    alt=""
                  />
                </div>
                <div className="about-rotated-box">
                  <div className="about-shape-2">
                    <div className="circle-box">
                      <div className="logo-box">
                        <img
                          src={assetPath("/images/icons/about-circle-icon.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="250.5"
                          height="250.5"
                          viewBox="0 0 250.5 250.5"
                        >
                          <path
                            d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                            id="e-path"
                          />
                          <text>
                            <textPath
                              id="e-text-path"
                              href="#e-path"
                              startOffset="0%"
                            >
                              {t("download_cv")} . {t("download_cv")} {t("download_cv")}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-right">
                <div className="title-area">
                  <div className="sub-title">
                    <i className="icon fa-brands fa-gg"></i>
                    {t("introduce")}
                  </div>

                  <h2 className="sec-title typed-color">
                    <TypedText strings={[t("about_typed_text")]} />
                  </h2>

                  <p className="pb-20">{t("about_paragraph")}</p>
                </div>

                <ul className="about-list pb-50">
                  {aboutList.map((item, index) => (
                    <li className={item.className} key={index}>
                      <img src={assetPath("/images/icons/about-logo.png")} alt="" />
                      {item.text}
                    </li>
                  ))}
                </ul>

                <div className="about-btn">
                  <a href="/assets/docs/CV.pdf" className="btn-mask" download>
                    <span className="link-effect">{t("download_cv")}</span>
                    <img
                      src={assetPath("/images/icons/about-circle-icon.png")}
                      alt="Download CV"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="round">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default AboutSection;
