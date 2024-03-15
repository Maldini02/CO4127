// JavaScript for footer interaction
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".footer-icon");

    // Add hover effect to footer icons
    icons.forEach(icon => {
        icon.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-5px)";
        });

        icon.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });
    });
});
