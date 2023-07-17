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
  const close_btn_icon = document.querySelector("#close-btn ion-icon");
  const navbar = document.querySelector(".navbar");
  const navbar_first_btn = document.querySelector(
    ".navbar-btns-box button:first-child"
  );
  const navbar_first_btn_link = document.querySelector(
    ".navbar-btns-box button:first-child a"
  );
  const logo = document.querySelector(".brand .logo");
  const logo_primary = document.querySelector(".brand .logo .primary-text");
  const first_section = document.querySelector(".first-section");

  // when menu button clicked
  menu_btn.onclick = () => {
    nav_menu.classList.add("active-sidebar");
    menu_btn.classList.add("active-sidebar");
    close_btn.classList.add("active-sidebar");
    close_btn_icon.classList.add("active-sidebar");
    navbar.classList.add("active-sidebar");
    navbar_first_btn.classList.add("active-sidebar");
    navbar_first_btn_link.classList.add("active-sidebar");
    logo.classList.add("active-sidebar");
    first_section.classList.add("active-sidebar");
    logo_primary.classList.add("active-sidebar");
  };

  // when close button clicked
  close_btn.onclick = () => {
    nav_menu.classList.remove("active-sidebar");
    menu_btn.classList.remove("active-sidebar");
    close_btn.classList.remove("active-sidebar");
    close_btn_icon.classList.remove("active-sidebar");
    navbar.classList.remove("active-sidebar");
    navbar_first_btn.classList.remove("active-sidebar");
    navbar_first_btn_link.classList.remove("active-sidebar");
    logo.classList.remove("active-sidebar");
    first_section.classList.remove("active-sidebar");
    logo_primary.classList.remove("active-sidebar");
  };
}

// FUNCTION HERO BUTTON HOVER
function heroBtnHover() {
  // call element
  const heroBtn = document.querySelector(".hero-btns-box button:last-child");
  const heroLink = document.querySelector(".hero-btns-box button:last-child a");

  heroBtn.addEventListener("mouseover", () => {
    heroLink.classList.add("cg-color");
  });

  heroBtn.addEventListener("mouseout", () => {
    heroLink.classList.remove("cg-color");
  });
}

// CALL APPS
navMenuTarget();
sidebar();
heroBtnHover();
