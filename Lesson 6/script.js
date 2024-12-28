function marqueAnimation() {
  window.addEventListener("wheel", function (e) {
    // console.log(e.deltaY);
    if (e.deltaY > 0) {
      // console.log("seedha scroll");
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        ease: "none",
        duration: 3.5,
        repeat: -1,
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      // console.log("reverse scroll");
      gsap.to(".marque", {
        transform: "translateX(0)",
        ease: "none",
        duration: 3.5,
        repeat: -1,
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}

marqueAnimation()
