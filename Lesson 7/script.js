function page1Animation() {
  var tl = gsap.timeline();
  tl.from("nav h4, nav ul li", {
    y: -30,
    duration: 0.5,
    delay: 1,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from(
    ".center h1,.center p, .center button",
    {
      x: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    },
    "-=0.3"
  );
  tl.from(
    ".center img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=1"
  );
  tl.from(
    ".bottom-img img",
    {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.23,
    },
    "-=1"
  );
}
function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2 ",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".page2 .services ", {
    x: -100,
    delay: 1,
    duration: 0.5,
    opacity: 0,
  });
  tl2.from(
    "#left-part1",
    {
      x: -300,
      duration: 0.5,
      opacity: 0,
    },
    "left"
  );
  tl2.from(
    "#left-part2",
    {
      x: -300,
      duration: 0.5,
      opacity: 0,
    },
    "right"
  );
  tl2.from(
    "#right-part1",
    {
      x: 300,
      duration: 0.5,
      opacity: 0,
    },
    "left"
  );
  tl2.from(
    "#right-part2",
    {
      x: 300,
      duration: 0.5,
      opacity: 0,
    },
    "right"
  );
}
page1Animation();
page2Animation();
