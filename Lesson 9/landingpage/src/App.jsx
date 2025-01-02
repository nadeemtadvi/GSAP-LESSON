import React, { useEffect } from "react";
import "./App.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
    <div className=" text-white min-h-screen w-full relative">
      {data[0].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}
    </div>
    {/* <div className=" text-white min-h-screen w-full relative">
      {data[1].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}  
    </div>
    <div className=" text-white min-h-screen w-full relative">
      {data[2].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}
    </div> */}
    <div className="text-white h-screen w-full bg-black">
      <nav className="fixed top-0 w-full flex justify-between px-20 py-8">
        <div className="brand">
          <h3>BRAND.</h3>
        </div>
        <div className="links flex gap-10 text-white">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </div>
      </nav>
      </div>
    </>
  );
};

export default App;
