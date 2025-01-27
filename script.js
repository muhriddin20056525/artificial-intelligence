const navBtn = document.querySelector(".header-container i");
const nav = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
