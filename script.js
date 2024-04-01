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

document.addEventListener('DOMContentLoaded', function () {
    const questionButtons = document.querySelectorAll('.question');

// JavaScript for FAQ
    questionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const answer = button.nextElementSibling;
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});

// JavaScript for explore
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the button
    var exploreButton = document.getElementById("exploreLink");
    exploreButton.addEventListener("click", function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Alert when button is clicked
        alert("Exploring!");
    });
});


const container = document.querySelector('.container');
        const content = document.querySelector('.content');
        const showMoreBtn = document.querySelector('.show-more');

        showMoreBtn.addEventListener('click', () => {
            if (container.style.maxHeight) {
                container.style.maxHeight = null;
                showMoreBtn.textContent = 'Read More';
            } else {
                container.style.maxHeight = content.scrollHeight + 'px';
                showMoreBtn.textContent = 'Read Less';
            }
        });