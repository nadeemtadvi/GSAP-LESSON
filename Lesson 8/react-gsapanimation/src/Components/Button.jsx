import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Button = () => {
  const [circle, setCircle] = useState(0);
  const [rotate, setRotate] = useState(0);
  const random = gsap.utils.random(-500, 500, 10);
  const rotateCicle = gsap.utils.random(-100, 300, 10);
  
  useGSAP(() => {
    gsap.from(".half-circle", {
      x: circle,
      duration: 1,
      delay: 1,
      rotate: rotate,
    });
  }, [circle, rotate]);

  return (
    <div className="button-container">
      <button
        onClick={() => {
          setCircle(random);
          setRotate(rotateCicle);
        }}
      >
        Animate
      </button>
      <div className="half-circle"></div>
    </div>
  );
};

export default Button;
