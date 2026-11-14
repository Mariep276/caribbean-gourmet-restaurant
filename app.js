"use strict";

document.addEventListener("DOMContentLoaded", function () {

  /* =====================================
     HAMBURGER MENU — HOME AND GALLERY
  ===================================== */

  const menuToggle =
    document.getElementById("menuToggle") ||
    document.getElementById("menuButton");

  const navLinks =
    document.getElementById("navLinks") ||
    document.getElementById("mainNavigation");

  if (menuToggle && navLinks) {

    function closeMenu() {
      navLinks.classList.remove("open");
      navLinks.style.display = "";

      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    }

    menuToggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = navLinks.classList.toggle("open");

      navLinks.style.display = isOpen ? "flex" : "";

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
      if (
        !menuToggle.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        closeMenu();
      }
        });
  }
});
  