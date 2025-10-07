window.addEventListener("load", () => {
  const elements = document.querySelectorAll("h1, .date, p, .details span, .rsvp a");
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 500 + i*300);
  });

  const slides = document.querySelectorAll(".slide");
  let slideIndex = 0;

  function showNextSlide() {
    slides[slideIndex].classList.add("show");
    slideIndex++;
    if(slideIndex < slides.length){
      setTimeout(showNextSlide, 1500);
    }
  }

  showNextSlide();
});
