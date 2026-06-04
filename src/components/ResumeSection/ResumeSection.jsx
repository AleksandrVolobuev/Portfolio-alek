import React, { useState } from "react";
import "../../scss/template/section/resume/_resume.scss";
import TypedText from "../utilities/TypedText";
import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";

const tabList = [
  { id: "resume-tab-1", labelKey: "experience" },
  { id: "resume-tab-2", labelKey: "education" },
  { id: "resume-tab-3", labelKey: "skills" },
  { id: "resume-tab-4", labelKey: "awards" },
];

const ResumeSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("resume-tab-1");

  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <section className="resume-section pt-120" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area three text-center">
              <div className="sub-title">
                <i className="icon fa-brands fa-gg"></i> {t("resume")}
              </div>
              <h2 className="sec-title typed-color">
                <TypedText
                  strings={[
                    t("resume_typed_text") || "Crafting Stories through Design and Imagination portfolio",
                  ]}
                />
              </h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="developer-resume_tab-wrapper space-bottom">
              <div className="developer-resume__tab-menu">
                <ul>
                  {tabList.map((tab) => (
                    <li key={tab.id}>
                      <a
                        href="#"
                        data-rel={tab.id}
                        className={activeTab === tab.id ? "active" : ""}
                        onClick={(e) => handleTabClick(e, tab.id)}
                      >
                        {t(tab.labelKey)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="developer-resume_tab-list">
                {/* EXPERIENCE */}
                <div
                  className="developer-resume-tab-box"
                  id="resume-tab-1"
                  style={{
                    display: activeTab === "resume-tab-1" ? "block" : "none",
                  }}
                >
                  <div className="developer-experience__area">
                    <div className="experience__grid">
                      {[
                        {
                          time: "2025 - Present",
                          title: t("exp_sr_product_designer"),
                          company: "Zaman IT",
                          description: t("exp_sr_product_designer_desc"),
                        },
                        {
                          time: "2022 - 2025",
                          title: t("exp_jr_product_designer"),
                          company: "Uttara IT",
                          description: t("exp_jr_product_designer_desc"),
                        },
                        {
                          time: "2021 - 2022",
                          title: t("exp_sr_website_ui_designer"),
                          company: "Softonic",
                          description: t("exp_sr_website_ui_designer_desc"),
                        },
                        {
                          time: "2018 - 2020",
                          title: t("exp_jr_mobile_apps_designer"),
                          company: "UiTabs",
                          description: t("exp_jr_mobile_apps_designer_desc"),
                        },
                      ].map((item, i) => (
                        <div className="experience__item" key={i}>
                          <h2 className="exp-time">
                            <span>
                              <i className="fa-regular fa-calendar-days"></i>
                            </span>
                            {item.time}
                          </h2>
                          <h3 className="exp-title">{item.title}</h3>
                          <h4 className="company">{item.company}</h4>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* EDUCATION */}
                <div
                  className="developer-resume-tab-box"
                  id="resume-tab-2"
                  style={{
                    display: activeTab === "resume-tab-2" ? "block" : "none",
                  }}
                >
                  <div className="developer-experience__area">
                    <div className="experience__grid">
                      {[
                        {
                          time: "2020 - 2024",
                          title: t("edu_bachelor_design"),
                          company: t("edu_design_university"),
                          description: t("edu_bachelor_design_desc"),
                        },
                        {
                          time: "2017 - 2020",
                          title: t("edu_diploma_graphic_design"),
                          company: t("edu_creative_college"),
                          description: t("edu_diploma_graphic_design_desc"),
                        },
                        {
                          time: "2015 - 2017",
                          title: t("edu_high_school"),
                          company: t("edu_art_high_school"),
                          description: t("edu_high_school_desc"),
                        },
                        {
                          time: "2010 - 2015",
                          title: t("edu_basic_design_training"),
                          company: t("edu_local_design_workshop"),
                          description: t("edu_basic_design_training_desc"),
                        },
                      ].map((item, i) => (
                        <div className="experience__item" key={i}>
                          <h2 className="exp-time">
                            <span>
                              <i className="fa-regular fa-calendar-days"></i>
                            </span>
                            {item.time}
                          </h2>
                          <h3 className="exp-title">{item.title}</h3>
                          <h4 className="company">{item.company}</h4>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SKILLS */}
                <div
                  className="developer-resume-tab-box"
                  id="resume-tab-3"
                  style={{
                    display: activeTab === "resume-tab-3" ? "block" : "none",
                  }}
                >
                  <div className="developer-skill_grid">
                    {["js", "react", "node", "postgres"].map(
                      (icon, index) => (
                        <div className="progress-items" key={index}>
                          <div className="progress_icon">
                            <div className="icon">
                              <img
                                src={assetPath(`/images/icons/${icon}.png`)}
                                alt={icon}
                              />
                            </div>
                          </div>
                          <div className="skills">
                            <div className="skills-items">
                              <div className="skill-header">
                                <div className="skill-title">
                                  {t(`skill_${icon}`) || icon.toUpperCase()}
                                </div>
                              </div>
                              <div className="skill-bar">
                                <div className="bar-inner">
                                  <div
                                    className="bar progress-line"
                                    data-width="90"
                                  >
                                    <div className="skill-percentage">
                                      <div className="count-box">
                                        <span
                                          className="count-text"
                                          data-speed="3000"
                                          data-stop="90"
                                        >
                                          0
                                        </span>
                                        <span className="percent">%</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span className="subject">{t(`skill_subject_${icon}`)}</span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* AWARDS */}
                <div
                  className="developer-resume-tab-box"
                  id="resume-tab-4"
                  style={{
                    display: activeTab === "resume-tab-4" ? "block" : "none",
                  }}
                >
                  <div className="developer-award__grid">
                    {[1, 2, 3, 4].map((num) => (
                      <div className="award__item" key={num}>
                        <h2 className="award__date">{`202${num}`}</h2>
                        <img
                          src={assetPath(`/images/resume/${num}.png`)}
                          alt={t(`award_title_${num}`) || `Award Image ${num}`}
                        />
                        <h3 className="award__title">{t(`award_title_${num}`) || `Award Title ${num}`}</h3>
                        <h4 className="award__status">{t(`award_status_${num}`) || `Status ${num}`}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
