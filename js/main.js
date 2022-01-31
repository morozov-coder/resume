
window.onscroll = function() {
  if (window.pageYOffset === 0) {
    document.querySelector(".navbar").style.backgroundColor = "#1f2023";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "#2d2f34";
  }
  
}