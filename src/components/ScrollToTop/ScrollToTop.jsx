import React, { useEffect, useState } from "react";
import "../../scss/utilites/_scrollto-top.scss";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight - windowHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;

      setProgress(scrollProgress);
      setShowButton(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scrollToTop ${showButton ? "visible" : ""}`}
      style={{ display: showButton ? "block" : "none" }}
      onClick={handleClick}
    >
      <div className="arrowUp">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
      <div
        className="water"
        style={{ transform: `translateY(${100 - progress}%)` }}
      >
        <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
          <use xlinkHref="#wave"></use>
        </svg>
        <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
          <use xlinkHref="#wave"></use>
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 560 20"
          style={{ display: "none" }}
        >
          <symbol id="wave">
            <path
              d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7v20H420z"
              fill="#fff"
            ></path>
            <path
              d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0v20H420z"
              fill="#fff"
            ></path>
            <path
              d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7v20H140z"
              fill="#fff"
            ></path>
            <path
              d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0v20H140z"
              fill="#fff"
            ></path>
          </symbol>
        </svg>
      </div>
    </div>
  );
};

export default ScrollToTop;
