const toggleMenu = document.querySelector(".toggle-menu");
let isOpen = false;
toggleMenu.addEventListener("click", activeMenu);

function activeMenu() {
  const header = document.querySelector("header");

  if (!isOpen) {
    header.style.height = "30rem";

    isOpen = true;
  } else {
    header.style.height = "8rem";
    isOpen = false;
  }
}
