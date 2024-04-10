

gsap.fromTo(
  "#moon",
  {
    x: 100,
    y: -150,
    scale: 0,
    width: 305,
    height: 297,
    opacity: 0.5,
    duration: 5,
    
  },
  { x: 614.5, y: -394, rotation:360, scale: 1, duration: 10, opacity: 1 }
);
gsap.to("#sun", { duration: 12,opacity: 0, rotation:360 });


