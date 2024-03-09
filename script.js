function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-nav');
}


const invertButton = document.querySelector(".menu")

invertButton.addEventListener("click", function() {
    invertButton.classList.toggle("invert");
});