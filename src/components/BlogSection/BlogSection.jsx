import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "../../scss/template/section/blog/_blog-details.scss";
import "../../scss/template/section/blog/_blog.scss";

import "swiper/css";
import "swiper/css/pagination";

import SpringText from "../utilities/SpringText";
import { assetPath } from "../../utils/assetPath";

const BlogSection = () => {
  const { t } = useTranslation();

  // Данные блога с ключами для перевода
  const blogPosts = [
    {
      img: "/images/blog/2.jpg",
      dateKey: "blog.date1",
      categoryKey: "blog.category1",
      titleKey: "blog.title1",
      link: "blog-details.html",
    },
    {
      img: "/images/blog/1.jpg",
      dateKey: "blog.date2",
      categoryKey: "blog.category1",
      titleKey: "blog.title2",
      link: "blog-details.html",
    },
    {
      img: "/images/blog/3.jpg",
      dateKey: "blog.date3",
      categoryKey: "blog.category1",
      titleKey: "blog.title3",
      link: "blog-details.html",
    },
    // ... остальные посты
  ];

  return (
    <section className="blog-section space" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area mb-50">
              <div className="sub-title">
                <i className="icon fa-brands fa-gg"></i>
                {t("blog.latest_blog")}
              </div>
              <SpringText text={t("blog.latest_articles")} />
            </div>
          </div>
          <div className="blog-slider-wrapper">
            <Swiper
              className="blog-slider"
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {blogPosts.map(({ img, dateKey, categoryKey, titleKey, link }, idx) => (
                <SwiperSlide key={idx}>
                  <article className="blog-single-box">
                    <div className="blog-inner">
                      <a href={link}>
                        <img src={assetPath(img)} alt={t(titleKey)} />
                      </a>
                      <div className="blog-content">
                        <div>
                          <ul className="blog-meta">
                            <li>
                              <a href="#">{t(dateKey)}</a>
                            </li>
                            <li>
                              <a href="#">{t(categoryKey)}</a>
                            </li>
                          </ul>
                          <a href={link}>
                            <h4 className="blog-title">{t(titleKey)}</h4>
                          </a>
                          <a href={link} className="blog-link">
                            {t("blog.read_more")}{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
