import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SpringText from "../utilities/SpringText";
import { assetPath } from "../../utils/assetPath";

import "../../scss/template/section/testimonial/_testimonial.scss";

const TestimonialSection = () => {
  const { t } = useTranslation();

  // Получаем массив отзывов из перевода
  const testimonials = t("testimonials", { returnObjects: true });

  return (
    <section className="testimonial-section bg-theme2" id="testimonials">
      <div className="container space border">
        <div className="row gy-30">
          {/* Левая колонка */}
          <div className="col-lg-4">
            <div className="title-area">
              <div className="sub-title">
                <i className="icon fa-brands fa-gg"></i>{t("testimonials_title")}
              </div>
              <SpringText text={t("clients_feedback")} />

              <p className="sec-text text-white6">
                {t("testimonial_description")}
              </p>
            </div>
            <ul className="testi-pagination">
              <li className="s-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </li>
              <li className="s-next">
                <i className="fa-solid fa-arrow-right"></i>
              </li>
            </ul>
          </div>

          {/* Правая колонка */}
          <div className="col-lg-8">
            <div className="testimonial-slider-wrapper">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".s-next",
                  prevEl: ".s-prev",
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className="testimonial-slider"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-box">
                      <div className="testi-thumb">
                        <img src={assetPath(item.image)} alt={item.name} />
                      </div>
                      <div className="testi-inner">
                        <p>{item.text}</p>
                        <ul className="ratting">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <li key={i}>
                              <i className="fas fa-star"></i>
                            </li>
                          ))}
                        </ul>
                        <h3 className="title">{item.name}</h3>
                        <span className="designation">{item.role}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
