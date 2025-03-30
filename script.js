// script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        
        // Add hover effect
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue'; // Change to desired color
        });

        container.appendChild(square);
    }
});