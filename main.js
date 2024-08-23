document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideCount = slides.children.length;
  let slidePosition = 0;

  function updateSlidePosition() {
    const newPosition = -slidePosition * 100;
    slides.style.transform = `translateX(${newPosition}%)`;
  }

  function showNextSlide() {
    slidePosition = (slidePosition + 1) % slideCount;
    updateSlidePosition();
  }

  function showPrevSlide() {
    slidePosition = (slidePosition - 1 + slideCount) % slideCount;
    updateSlidePosition();
  }

  let autoSlideInterval;

  function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function toggleAutoSlide() {
    if (autoSlideInterval) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  }

  document.querySelector(".next").addEventListener("click", showNextSlide);
  document.querySelector(".prev").addEventListener("click", showPrevSlide);
  document
    .querySelector(".new_button")
    .addEventListener("click", toggleAutoSlide);

  updateSlidePosition();
});
