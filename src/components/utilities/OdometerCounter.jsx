import React, { useEffect, useRef, useState } from "react";

const OdometerCounter = ({ value, suffix = "" }) => {
  const odometerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = odometerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !odometerRef.current) return;

    let odInstance;

    import("odometer").then(({ default: Odometer }) => {
      odInstance = new Odometer({
        el: odometerRef.current,
        value: 0,
        format: "(,ddd)",
        theme: "default",
      });
      odInstance.update(value);
    });

    return () => {
      if (odInstance) odInstance = null;
    };
  }, [visible, value]);

  return (
    <span className="odometer" ref={odometerRef}>
      {visible ? value : 0}
      {suffix}
    </span>
  );
};

export default OdometerCounter;
