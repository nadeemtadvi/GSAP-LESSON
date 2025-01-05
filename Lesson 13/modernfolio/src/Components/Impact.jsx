import { useGSAP } from "@gsap/react"; // Ensure this hook works properly
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect } from "react";

const Impact = () => {
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".rotate", {
      transform: "rotateX(-90deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotate",
        start: "top 60%",
        end: "bottom -250%",
        scrub: 2,
      },
    });
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.5;

    const frameCount = 412;
    const images = [];
    const currentFrame = (index) =>
      `/src/assets/stronot/frame_${index.toString().padStart(4, "0")}.jpg`;

    const loadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
    };

    const renderFrame = (index) => {
      if (images[index]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
      }
    };

    loadImages();

    gsap.to(
      { frame: 0 },
      {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          trigger: canvas,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        onUpdate: function () {
          renderFrame(Math.round(this.targets()[0].frame));
        },
        ease: "none",
      }
    );

    return () => {
      if (ScrollTrigger.getAll().length) {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }
    };
  }, []);

  return (
    <div className="section-two p-8 text-center">
      <div className="rotate">
        <h1 className="text-[40vw] leading-[30vw] bebas font-medium uppercase">
          Impact
        </h1>
      </div>
      <div className="rotate">
        <h1 className="text-[40vw] leading-[30vw] bebas font-medium uppercase">
          Design
        </h1>
      </div>
      <div className="rotate">
        <h1 className="text-[40vw] leading-[30vw] bebas font-medium uppercase">
          Artist
        </h1>
      </div>
      <div className="rotate">
        <h1 className="text-[40vw] leading-[30vw] bebas font-medium uppercase">
          is that
        </h1>
      </div>
      <div className="rotate relative">
        <canvas
          ref={canvasRef}
          className="w-[90%] h-full absolute left-1/2 -translate-x-1/2"
        ></canvas>
        <h1 className="text-[40vw] leading-[30vw] bebas font-medium uppercase">
          works
        </h1>
      </div>
    </div>
  );
};

export default Impact;
