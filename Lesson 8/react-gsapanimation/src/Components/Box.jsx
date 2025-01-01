import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Box = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 300,
      duration: 2,
      delay: 1,
      rotate: 800,
    });
  });
  return (
    <div>
      <div ref={gsapRef} className="box"></div>
    </div>
  );
};

export default Box;
