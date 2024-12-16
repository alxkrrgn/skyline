// forescript.js

document.addEventListener("DOMContentLoaded", function () {
  const openMobMenu = document.querySelector(".open-mobile-menu");
  const closeMobMenu = document.querySelector(".close-mobile-menu");
  const topMenuWrapper = document.querySelector(".top-menu-wrapper");

  // Handle mobile menu open
  if (openMobMenu) {
    openMobMenu.addEventListener("click", () => {
      topMenuWrapper.classList.add("menu-open");
    });
  }

  // Handle mobile menu close
  if (closeMobMenu) {
    closeMobMenu.addEventListener("click", () => {
      topMenuWrapper.classList.remove("menu-open");
    });
  }
});
