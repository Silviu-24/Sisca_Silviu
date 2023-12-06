let slideIndex = 0;
let slideshowRunning = false;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("image1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

function startSlideshow() {
  document.getElementById("container").style.display = "none";
  document.getElementById("slideshow").style.display = "block";
  slideshowRunning = true;
  showSlides();
}

const slideshowTitle = document.getElementById("title");
slideshowTitle.addEventListener("dblclick", startSlideshow);
