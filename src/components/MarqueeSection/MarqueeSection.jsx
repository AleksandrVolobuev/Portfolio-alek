import React from "react";
import "../../scss/template/section/marquee/_marquee.scss";

const MarqueeSection = () => {
  const marqueeItems = ["CODE", "INNOVATION", "DEBUGGING", "DEPLOYMENT", "OPTIMIZATION"];


  return (
    <div className="marquee-section">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee clearfix marquee-wrap">
          <ul className="marquee_mode marquee__group">
            {marqueeItems.map((item, index) => (
              <li key={index} className="item m-item">
                <span>*</span> {item}
              </li>
            ))}
            {/* Дублируем для бесконечной прокрутки */}
            {marqueeItems.map((item, index) => (
              <li key={index + marqueeItems.length} className="item m-item">
                <span>*</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
