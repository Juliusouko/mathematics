const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (
    !isClickInsideNav &&
    !isClickOnToggle &&
    nav.classList.contains("active")
  ) {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
