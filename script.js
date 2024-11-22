const toggleButton = document.getElementById('toggle-button');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    // Toggle the menu's visibility by toggling the "display" CSS property
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});






