gsap.to(".box", {
  x: 500,
  duration: 1,
  delay: 1,
  rotate: 360,
  backgroundColor: "red",
  borderRadius: "50%",
  scale: 0.28,
  opacity: 1,
  // repeat:1,
  repeat: -1, //unlimited repeat
  yoyo: true,
});
gsap.from(".box02", {
  x: 500,
  duration: 1,
  delay: 1,
  rotate: 180,
  backgroundColor: "yellow ",
  borderRadius: "0%",
  scale: 0.28,
  opacity: 0,
});
gsap.from("h1", {
  opacity: 0,
  delay: 1,
  duration: 1,
  y: 30,
  // stagger:-0.31   //ulta chlenga
  stagger: 0.31,
});

// gsap.to(".tap",{
//     x:500,
//     duration:2,
//     delay:1,
//     rotate:180,
//     backgroundColor:"green ",
//  })
// gsap.to(".tap1",{
//     x:500,
//     duration:2,
//     delay:3,
//     rotate:180,
//     backgroundColor:"gray",
// })
// gsap.to(".tap2",{
//     x:500,
//     duration:2,
//     delay:5,
//     rotate:180,
//     backgroundColor:"#454545",
// })

var tl = gsap.timeline();
var tl2 = gsap.timeline();

tl.to(".tap", {
  x: 500,
  duration: 1,
  delay: 1,
  rotate: 180,
  backgroundColor: "green ",
  opacity: 1,
});
tl.to(".tap1", {
  x: 500,
  duration: 1,
  rotate: 180,
  backgroundColor: "gray ",
  opacity: 1,
});
tl.to(".tap2", {
  x: 500,
  duration: 1,
  rotate: 180,
  backgroundColor: "#454545 ",
  opacity: 1,
});

tl2.from("h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
});
tl2.from(".nav-items h4", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.2,
});
gsap.from(".page1 .dot", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
  //   scrollTrigger:".page1 .dot",
  scrollTrigger: {
    trigger: ".page1 .dot",
    scroller: "body",
    markers: true,
    // start: "top 60%",
  },
});
gsap.from(".page2 .dot", {
  scale: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: ".page2 .dot",
});
gsap.from(".page3 .dot", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
  scrollTrigger: ".page3 .dot",

});
gsap.from(".page2 .text-con", {
    opacity: 0,
    duration: 1,
    delay: 1,
    x:-160,
    scrollTrigger: {
        trigger: ".page2 .text-con",
        scroller: "body",
        markers: true,
        start: "top 50%",
      },
  });
gsap.from(".page2 .para-con", {
    opacity: 0,
    duration: 1,
    delay: 1,
    x:160,
    scrollTrigger: {
        trigger: ".page2 .para-con",
        scroller: "body",
        markers: true,
        start: "top 40%",
      },
  });
  gsap.from(".page3 .dot", {
    opacity: 0,
    duration: 1,
    delay: 1,
    rotate:760,
    scrollTrigger: {
        trigger: ".page3 .dot",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end:"top 30%",
        // scrub:2
        scrub:true,
        // pin:true

      },
  });