function breakText() {
  var h1 = document.querySelector("h1");
  var h1text = h1.textContent;
  console.log(h1text);

  // var splitText = h1text.split(" ")
  var splitText = h1text.split("");
  console.log(splitText);

  var clutter = "";
  var halfvalue = Math.floor(splitText.length / 2);
  console.log(halfvalue);
  splitText.forEach(function (e, index) {
    if (index < halfvalue) {
      clutter = clutter + `<span class="a">${e}</span>`;
    } else {
      clutter = clutter + `<span class="b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
  console.log(clutter);
  
}

breakText();

// gsap.from("h1 span",{
//     y:50,
//     duration:0.8,
//     delay:0.5,
//     opacity:0,
//     stagger:-0.15
// })


gsap.from("h1 .a",{
    y:80,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:80,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})