document.addEventListener('DOMContentLoaded', function () {
  const slider = new ChiefSlider('.about__slider', {
    loop: true,
    autoplay: true,
    interval: 7000,
  });
});

window.onscroll = function() {
  if (window.pageYOffset === 0) {
    document.querySelector(".navbar").classList.remove("scroll");
  } else {
    document.querySelector(".navbar").classList.add("scroll");
  }
  
}

const bars = document.querySelector(".bars");
bars.addEventListener("click", (evt) => {
  evt.preventDefault();
  bars.classList.toggle("open");
})