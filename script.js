// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable Inspect Element (F12 and Ctrl+Shift+I)
document.addEventListener('keydown', (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
    // Disable "Ctrl+U" to prevent viewing source code
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
    }
});

// Disable Print Screen
document.addEventListener("keyup", function(event) {
    if (event.key === "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Screenshots are disabled on this page.");
    }
});

// Clear Clipboard continuously (prevents copying)
setInterval(() => {
    navigator.clipboard.writeText("");
}, 300);