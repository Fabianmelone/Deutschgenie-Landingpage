let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1; }
  if (n < 1) {slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].setAttribute("aria-hidden", i === (slideIndex - 1) ? "false" : "true");
  }

  for (i = 0; i < dots.length; i++) {
    const isActive = i === (slideIndex -1);
    dots[i].className = dots[i].className.replace(" active", "");

    if (isActive) {
      dots[i].className += " active";
      dots[i].setAttribute("aria-current", "true");
    } else {
      dots[i].removeAttribute("aria-current");
    }
  }

  slides[slideIndex-1].style.display = "flex";
}

document.getElementById("year").textContent = new Date().getFullYear();