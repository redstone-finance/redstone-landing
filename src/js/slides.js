let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (slides.length > 0 && dots.length > 0) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

export default currentSlide;
