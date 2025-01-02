import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const headingRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect;

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setIsLoaded((prev) => {
        if (!prev) {
          gsap.set(cursorRef.current, {
            top: e.clientY,
            left: e.clientX,
          });
          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });
          gsap.to(cursorRef.current, {
            scale: 1000,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(cursorRef.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        }
        else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prev;
      });
    };
    const headingElement = headingRef.current;
    headingElement.addEventListener("click", handleClick);
    return () => {
      headingElement.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <span
        ref={cursorRef}
        className="growing fixed rounded-full  top-[-20px] left-[-20px] w-5 h-5 block"
      ></span>
      <div className="min-h-screen relative w-full">
        {isLoaded &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}

        <nav className=" w-full relative  flex justify-between px-10 py-8 font-['Helvetica']">
          <div className="brand">
            <h3>Brand.studio</h3>
          </div>
          <div className="links flex gap-10 ">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="px-[20%] w-full relative z-10">
          <div className="w-[50%] ">
            <h3 className=" text-2xl leading-1.4 font-['Helvetica']">
              At Thirtysixstudio, we build immersive digital experiences for
              brands with a purpose.
            </h3>
            <p className=" leading-1.4 w-[80%] mt-8 text-lg font-light leading-relaxed">
              We are a team of designers, developers, and strategists who are
              passionate about creating digital experiences that are both
              beautiful and functional.
            </p>
            <p className="mt-8 text-sm font-light">Scroll</p>
          </div>
        </div>
        <div className="font-['Helvetica']  w-full">
          <div className="w-full pl-8 absolute left-0 bottom-0">
            <h1
              ref={headingRef}
              className="text-[12rem] tracking-tight font-normal leading-none "
            >
              Brand.studio
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
      {isLoaded &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full h-full flex items-center justify-between px-20">
          <div className="w-1/2">
            <h2 className="text-6xl font-light  mb-8 font-['Helvetica']">
              About Us
            </h2>
            <p className=" text-lg font-light leading-relaxed mb-6">
              We are a creative studio focused on crafting meaningful digital
              experiences. Our approach combines innovative design with
              cutting-edge technology to create impactful solutions for our
              clients.
            </p>
            <p className=" text-lg font-light leading-relaxed">
              With years of experience in digital design and development, we've
              helped numerous brands transform their digital presence and
              connect with their audience in meaningful ways.
            </p>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Creative studio workspace"
              className="w-[80%] h-[70%] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
