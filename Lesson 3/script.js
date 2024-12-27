var cursor = document.querySelector(".cursor");
var main = document.querySelector("main");
var imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 2,
    ease: "power4.out",
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";

  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff7c",
  });
});
imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#ffffff",
  });
});
