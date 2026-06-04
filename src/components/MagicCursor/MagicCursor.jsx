import React, { useEffect, useRef } from "react";
import "../../scss/utilites/_magicCursor.scss";

const MagicCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const hideCursor = () => cursor.classList.add("hide");
    const showCursor = () => cursor.classList.remove("hide");

    // Динамическое делегирование: наведение на ссылки и кнопки
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) {
        cursor.classList.add("cursor-grow");
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) {
        cursor.classList.remove("cursor-grow");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseover", showCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseover", showCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div className="magic-cursor" ref={cursorRef}></div>;
};

export default MagicCursor;
