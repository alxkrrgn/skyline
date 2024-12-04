document.addEventListener("DOMContentLoaded", function() {
    const pageHeader = document.querySelector(".page-header");
    const openMobMenu = document.querySelector(".open-mobile-menu");
    const closeMobMenu = document.querySelector(".close-mobile-menu");
    const toggleSearchForm = document.querySelector(".search");
    const searchForm = document.querySelector(".page-header form");
    const topMenuWrapper = document.querySelector(".top-menu-wrapper");
    const isVisible = "is-visible";
    const showOffCanvas = "show-offcanvas";
    const noTransition = "no-transition";
    let resize;
  
    // Add click event listener to open mobile menu
    openMobMenu.addEventListener("click", () => {
      topMenuWrapper.classList.add(showOffCanvas);  // Show mobile menu
    });
  
    // Add click event listener to close mobile menu
    closeMobMenu.addEventListener("click", () => {
      topMenuWrapper.classList.remove(showOffCanvas);  // Hide mobile menu
    });
  
    // Toggle the search form visibility
    toggleSearchForm.addEventListener("click", () => {
      searchForm.classList.toggle(isVisible);
    });
  
    // Handle window resize to disable transition during resizing
    window.addEventListener("resize", () => {
      pageHeader.querySelectorAll("*").forEach(function(el) {
        el.classList.add(noTransition);
      });
      clearTimeout(resize);
      resize = setTimeout(resizingComplete, 500);
    });
  
    function resizingComplete() {
      pageHeader.querySelectorAll("*").forEach(function(el) {
        el.classList.remove(noTransition);
      });
    }
  });
  