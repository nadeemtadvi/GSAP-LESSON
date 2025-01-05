import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Intro = () => {
  const tiltRef = useRef();
  const [xval, setXval] = useState(0);
  const [yval, setYval] = useState(0);
  const mouseMove = (e) => {
    // console.log("open", e.clientX, e.clientY);
    // setXval(e.clientX/100)
    // setYval(e.clientY/100)
    // tiltRef.current.style.transform =`rotateY(${xval}deg) rotateX(${yval}deg)`
    setXval(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        30
    );
    setYval(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
  };
  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform : `rotateY(${xval}deg) rotateX(${yval}deg)`,
        duration : 2,
        ease:'elastic.out(1,0.3)'
      });
    },
    [xval, yval]
  );

  useGSAP(function(){
    gsap.to('.img-circle',{
      rotate:360,
      duration:3,
      repeat:-1,
      ease:'linear'
    })
  })

  return (
    <section onMouseMove={(e) => mouseMove(e)} className="h-screen">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="tilt-box relative flex flex-col justify-center">
            <div ref={tiltRef} id="perspective" className="uppercase  w-fit">
              <h1 className="text-[4vw] font-semibold leading-[3.6vw]">
                I am Dark Mode
              </h1>
              <h1 className="text-[8vw] font-bold leading-[6vw]">Designer</h1>
              <h1 className="text-[4vw]  font-semibold leading-[5vw]">
                to hire
              </h1>
            </div>
          </div>

          <div className="">
            <img
              src="https://images.unsplash.com/photo-1622899651911-c40805e787e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-4xl text-white ">
            <p>Brand Design</p>
            <p>Company Co.Brand Design</p>
          </div>
          <div className="flex justify-end  items-end gap-4 font-bold tracking-wider">
            <div className="img-circle bg-lime-600 w-20 h-20 rounded-full  text-sm flex justify-center items-center">
              <span className="bg-lime-200 text-black p-4 rounded-[10px]"></span>
            </div>
            <div className="img-circle bg-orange-600 w-20 h-20 rounded-full  text-sm flex justify-center items-center">
              <span className="bg-orange-200 text-black p-4 rounded-[10px]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
