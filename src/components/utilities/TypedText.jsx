import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings }) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 3500,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.current.destroy();
    };
  }, [strings]);

  return <span ref={el} />;
};

export default TypedText;
