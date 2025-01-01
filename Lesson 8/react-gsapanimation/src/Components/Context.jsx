import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Context = () => {
  const boxRef = useRef();
  const { contextSafe } = useGSAP()
  const Rotatebox = contextSafe( () => {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  })
  return (
    <div className="Context">
      <button onClick={Rotatebox}>Animate More</button>
      <div ref={boxRef} className="rounded"></div>
    </div>
  );
};

export default Context;
