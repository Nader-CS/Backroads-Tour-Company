let date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

let navBtn = document.getElementById("nav-toogle");
let links = document.getElementById("nav-links");
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-nav-links");
});

let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (scrollY > 62) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

let scrollLinks = document.querySelector(".nav-links");
scrollLinks.addEventListener("click", (e) => {
  e.preventDefault();
  links.classList.remove("show-nav-links");
  let id = e.target.getAttribute("href").slice(1);
  let element = document.getElementById(id);
  let pos;
  if (navbar.classList.contains("fixed")) {
    pos = element.offsetTop - 62;
  } else {
    pos = element.offsetTop - 124;
  }
  if (window.innerWidth < 992) {
    if (navbar.classList.contains("fixed")) {
      pos = element.offsetTop - 62;
    } else {
      pos = element.offsetTop - 332 - 62;
    }
  }
  window.scrollTo({
    top: pos,
    behavior: "smooth",
  });
});
