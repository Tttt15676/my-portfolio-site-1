document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        toggleButton.classList.toggle("open");
    });
});