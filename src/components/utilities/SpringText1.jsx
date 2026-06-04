import React from "react";
import "../../scss/utilites/_springText.scss";

const SpringText = ({ text }) => {
  return (
    <h2 className="sec-title">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="spring-char"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default SpringText;
