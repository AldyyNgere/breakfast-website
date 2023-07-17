// FUNCTION NAV MENU TARGET
function navMenuTarget() {
  // Get all elements
  const menu = document.querySelectorAll(".navbar a:not(.brand .logo)");
  const title = document.querySelector("title");

  // get target menu
  const targetMenu = (e) => {
    document.querySelector(".active-menu").classList.remove("active-menu");
    e.target.classList.add("active-menu");
    let menuName = e.target.textContent;
    title.textContent = `Breakfast - ${menuName}`;
  };

  // Iteration menu
  menu.forEach((a) => a.addEventListener("click", targetMenu));
}

// FUNCTION NAVBAR FOR IPAD AND MOBILE PHONE
function sidebar() {
  // call elements
  const nav_menu = document.querySelector(".navbar-menu");
  const menu_btn = document.getElementById("menu-btn");
  const close_btn = document.getElementById("close-btn");
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".brand .logo");
  const first_section = document.querySelector(".first-section");

  // when menu button clicked
  menu_btn.onclick = () => {
    nav_menu.classList.add("active-sidebar");
    menu_btn.classList.add("active-sidebar");
    close_btn.classList.add("active-sidebar");
    navbar.classList.add("active-sidebar");
    logo.classList.add("active-sidebar");
    first_section.classList.add("active-sidebar");
  };

  // when close button clicked
  close_btn.onclick = () => {
    nav_menu.classList.remove("active-sidebar");
    menu_btn.classList.remove("active-sidebar");
    close_btn.classList.remove("active-sidebar");
    navbar.classList.remove("active-sidebar");
    logo.classList.remove("active-sidebar");
    first_section.classList.remove("active-sidebar");
  };
}

// CALL APPS
navMenuTarget();
sidebar();
