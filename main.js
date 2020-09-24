const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  toggleFade();
  //clearFade();
});

const toggleFade = () => {
  for (link of links) {
    link.classList.toggle("fade");
  }
};
const clearFade = () => {
  for (link of links) {
    link.classList.remove("fade");
  }
};
