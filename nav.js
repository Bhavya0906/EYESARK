const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("cross");
    navContainer.classList.toggle("show");
  });