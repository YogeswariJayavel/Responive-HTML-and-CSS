let bar = document.querySelector(".bar");
let navLinks = document.querySelector(".nav-links");
let showDetails = document.querySelector(".shop-detail");

bar.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  showDetails.classList.toggle("mt");
});
