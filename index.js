const container = document.querySelector(".container-slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
console.log(dots);
let slideIndex = 0;
let timmer;
function handleActive(index) {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    slides[i].className = slides[i].className.replace(" active-anim", "");
  }

  dots[index].className += " active";
  slides[index].className += " active-anim";
}
function nextSlide() {
  clearTimeout(timmer);
  if (slideIndex !== slides.length - 1) {
    handleActive(slideIndex + 1);
    slideIndex += 1;
    console.log("adsfdf");
  } else if (slideIndex === slides.length - 1) {
    handleActive(0);
    slideIndex = 0;
  }
  timmer = setTimeout(() => {
    nextSlide();
  }, 2000);
}

function prevSlide() {
  clearTimeout(timmer);
  if (slideIndex !== 0) {
    handleActive(slideIndex - 1);
    slideIndex -= 1;
    console.log("adsfdf");
  } else if (slideIndex === 0) {
    handleActive(slides.length - 1);
    slideIndex = slides.length - 1;
  }
  timmer = setTimeout(() => {
    nextSlide();
  }, 2000);
}

function handleAutoSlide() {
  timmer = setTimeout(() => {
    nextSlide();
  }, 2000);
}
nextSlide();
