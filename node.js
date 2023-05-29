const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navItem = document.querySelectorAll(".navItem");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
