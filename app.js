const menu = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const closeIcon = document.querySelector("#close");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  })
  change = 2
}

if (closeIcon) {
closeIcon.addEventListener("click", () => {
  navbar.classList.remove("active");
})
}


