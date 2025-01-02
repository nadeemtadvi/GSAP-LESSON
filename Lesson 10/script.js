document.querySelectorAll(".card").forEach((card) => {
  gsap.to(card, {
    scale: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      scroller: "body",
      start: "top 10%",
      end: "bottom 10%",
      scrub: true,
    },
  });
});
