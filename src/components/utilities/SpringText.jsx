import React, { useEffect, useRef, useState } from "react";
import "../../scss/utilites/_springText.scss";

const SpringText = ({ text }) => {
  const containerRef = useRef(null);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Для перезапуска анимации — меняем ключ
          setAnimateKey((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    const current = containerRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <h2 className="sec-title" ref={containerRef}>
      {text.split("").map((char, index) => (
        <span
          key={`${animateKey}-${index}`} // уникальный ключ для перерисовки
          className="spring-char animate"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default SpringText;
