import React from "react";
import { useTranslation } from "react-i18next";
import "../../scss/template/section/contact/_contact.scss";
import SpringText from "../utilities/SpringText";

const ContactSection = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      title: t("contact.call_me"),
      link: "tel:02251398203",
      text: "+38 099-090-48-81",
      icon: "fa-solid fa-phone",
    },
    {
      title: t("contact.send_email"),
      link: "mailto:aleksandrvolobuev7676@gmail.com",
      text: "aleksandrvolobuev7676@gmail.com",
      icon: "fa-solid fa-envelope",
    },
    {
      title: t("contact.location"),
      text: (
        <>
          {t("contact.address_line1")} <br />
          {t("contact.address_line2")}
        </>
      ),
      icon: "fa-solid fa-location-dot",
    },
  ];

  return (
    <section className="contact-section space" id="contact">
      <div className="container">
        <div className="row gy-30">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
            <div className="contact-left">
              <div className="title-area">
                <div className="sub-title">
                  <i className="icon fa-brands fa-gg"></i>
                  {t("contact.contacts")}
                </div>
                <SpringText text={t("contact.say_hello")} />
                <p>{t("contact.encouragement")}</p>
              </div>
              <div className="contact-flex">
                {contactItems.map(({ title, link, text, icon }, idx) => (
                  <div className="contact-type" key={idx}>
                    <div className="icon">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 56 56"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <circle
                          className="btn-circle"
                          cx="28"
                          cy="28"
                          r="27"
                          fill="none"
                          stroke="var(--black-color6)"
                          strokeWidth="2"
                        />
                        <circle
                          className="btn-circle-prog"
                          cx="28"
                          cy="28"
                          r="27"
                          fill="none"
                          stroke="var(--black-color6)"
                          strokeWidth="2"
                        />
                      </svg>
                      <i className={icon}></i>
                    </div>
                    <div>
                      <h4 className="contact-name">{title}</h4>
                      {link ? <a href={link}>{text}</a> : <p>{text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
            <div className="contact-right">
              <div className="contact-form">
                <form
                  className="contact_form"
                  action="https://formspree.io/f/mzbnjrnb"
                  method="post"
                >
                  <div className="input-item">
                    <p>{t("contact.form.name")} *</p>
                    <input
                      type="text"
                      placeholder={t("contact.form.name_placeholder")}
                      name="name"
                      required
                    />
                  </div>
                  <div className="input-item">
                    <p>{t("contact.form.email")}*</p>
                    <input
                      type="email"
                      placeholder={t("contact.form.email_placeholder")}
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-item">
                    <p>{t("contact.form.subject")} *</p>
                    <input
                      type="text"
                      placeholder={t("contact.form.subject_placeholder")}
                      name="subject"
                      required
                    />
                  </div>
                  <div className="input-item">
                    <p>{t("contact.form.phone_optional")}</p>
                    <input
                      type="text"
                      placeholder={t("contact.form.phone_placeholder")}
                      name="phone"
                    />
                  </div>
                  <div className="input-item full">
                    <p>{t("contact.form.message")}</p>
                    <textarea
                      name="message"
                      placeholder={t("contact.form.message_placeholder")}
                    ></textarea>
                  </div>
                  <div className="input-item submit">
                    <button
                      type="submit"
                      className="submit-btn"
                      data-loading-text={t("contact.form.loading_text")}
                    >
                      <span className="btn-title">
                        {t("contact.form.submit")}
                      </span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
