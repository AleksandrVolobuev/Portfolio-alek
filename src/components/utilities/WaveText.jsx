import React from "react";
import "../../scss/utilites/_waveText.scss";

const WaveText = ({ text }) => {
  return (
    <h2 className="sec-title">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="wave-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default WaveText; // ВАЖНО: Экспорт по умолчанию