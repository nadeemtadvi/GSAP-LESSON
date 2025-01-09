import React, { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();
      let xTransform = gsap.utils.random(-100, 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"} `,
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )
        .to(
          elem,
          {
            xPercent: xTransform,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        );
    });
  });

  return (
    <div className=" w-full bg-zinc-900 text-white">
      <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
        <div
          style={{ ["--r"]: 3, ["--c"]: 5 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/1.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 7, ["--c"]: 2 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/2.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 4, ["--c"]: 6 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/3.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 8, ["--c"]: 3 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/4.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 2, ["--c"]: 7 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/5.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 5, ["--c"]: 4 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/6.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 1, ["--c"]: 6 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/7.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 6, ["--c"]: 1 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/8.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 9, ["--c"]: 5 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/9.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 3, ["--c"]: 2 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/10.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 7, ["--c"]: 7 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/11.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 4, ["--c"]: 3 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/12.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 1, ["--c"]: 4 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/13.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 8, ["--c"]: 6 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/14.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 2, ["--c"]: 1 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/15.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 6, ["--c"]: 8 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/16.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 3, ["--c"]: 4 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/17.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 5, ["--c"]: 7 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/18.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 9, ["--c"]: 2 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/19.jpg" className="w-full h-full object-cover" />
        </div>
        <div
          style={{ ["--r"]: 4, ["--c"]: 8 }}
          className="elem col-span-1 row-span-1"
        >
          <img src="./ig/20.jpg" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center   text-white">
        <h1 className="text-8xl mb-4 uppercase">Thomas vance</h1>
        <h1 className="text-4xl">small project</h1>
      </div>
      <div className="w-full h-screen flex items-center justify-center bg-[#d1d1d1]  relative z-[999] text-center mx-auto">
        <p className="text-4xl w-3/4 font-light leading-[3.2rem] text-black text-left">
          Thomas Vance® is a talented creative professional who brings unique
          vision and artistic sensibility to every project. With a keen eye for
          detail and a passion for visual storytelling, he crafts compelling
          work that resonates with audiences. His portfolio showcases a diverse
          range of projects that demonstrate his ability to blend technical
          skill with creative innovation®.
        </p>
      </div>
    </div>
  );
};

export default App;
