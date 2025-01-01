import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Container = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".boxes", {
        y: 300,
        opacity: 0,
        rotate: 720,
        duration: 1,
        delay: 1,
      });
    },
    { scope: container }
  );
  return (
    <section>
      <div ref={container} className="container">
        <div className="boxes"></div>
      </div>
      <div className="Kuch">
        <div className="boxes"></div>
      </div>
    </section>
  );
};

export default Container;
