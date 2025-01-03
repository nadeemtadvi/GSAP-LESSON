const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const frames = {
    currentIndex: 0,
    maxIndex: 382,
}

let framesLoaded = 0;
const Images = [];

function preloadImages() {
    for (var i = 1; i <= frames.maxIndex; i++) {
        const imageUrl = `./greenframe/frame_${i.toString().padStart(4, "0")}.jpg`;
        const img = new Image();
        img.src = imageUrl; 
        img.onload = () => {
            framesLoaded++;
            if(framesLoaded === frames.maxIndex) {
                loadFrames(frames.currentIndex);
                startanimate();
            }
        }
        Images.push(img);
    }
}

function loadFrames(index) {
    if(index >= 0 && index <= frames.maxIndex) {
       const img = Images[index];
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
      
       const scaleX = window.innerWidth / img.width;
       const scaleY = window.innerHeight / img.height;
       const scale = Math.max(scaleX, scaleY);
       const newWidth = img.width * scale;
       const newHeight = img.height * scale;
       const offsetX = (canvas.width - newWidth) / 2;
       const offsetY = (canvas.height - newHeight) / 2;

       context.clearRect(0, 0, canvas.width, canvas.height);
       context.imageSmoothingEnabled = true;
       context.imageSmoothingQuality = "high";
       context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
       frames.currentIndex = index;
    }
}

function startanimate() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".parent",
            start: "top top",
            end: "bottom bottom", 
            scrub: true, // Increased scrub value for slower animation
            markers: true,
        }
    });
    tl.to(frames, {
        currentIndex: frames.maxIndex,
        ease: "none", // Added ease none for smoother scrolling
        onUpdate: () => {
            loadFrames(Math.floor(frames.currentIndex));
        }
    })
}
preloadImages();
 