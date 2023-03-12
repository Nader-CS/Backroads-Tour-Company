let date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

let navBtn = document.getElementById("nav-toogle");
let links = document.getElementById("nav-links");
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-nav-links");
});
