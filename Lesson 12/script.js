function animate() {
  var tl = gsap.timeline();

  tl.to(".loader-bg", {
    top: "-100%",
    duration: 0.5,
    delay: 0.5,
    ease: "expo.Out",
  });

  tl.from(
    ".loader2-bg",
    {
      top: "100%",
      duration: 0.5,
      delay: 0.5,
      ease: "expo.Out",
    },
    "head"
  );
  tl.from(
    ".heading",
    {
      delay: 0.5,
      duration: 0.5,
      color: "black",
    },
    "head"
  );
  tl.to(".loader", {
    opacity: 0,
  });
  tl.to(".loader", {
    display: "none",
  });
}
animate();

const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  lerp: 0.04,
});

var elem = document.querySelectorAll(".elem");
var page = document.querySelector(".page-two");
elem.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    var img = el.getAttribute("data-img");
    console.log(img);
    page.style.backgroundImage = `url(${img})`;
    page.style.backgroundSize = "cover";
    page.style.backgroundPosition = "center";
    page.style.backgroundRepeat = "no-repeat";
  });
});

document.querySelector(".footer h2").addEventListener("click", () => {
  scroll.scrollTo(0, 0);
});
