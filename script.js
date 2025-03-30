// script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const button = document.getElementById('grid-button');

    function createGrid(squaresPerSide) {
        // Clear existing grid
        container.innerHTML = '';
        
        // Calculate square size based on container width
        const squareSize = 960 / squaresPerSide;

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement('div');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'blue'; // Change to desired color
            });

            container.appendChild(square);
        }
    }

    button.addEventListener('click', () => {
        let squaresPerSide = prompt("Enter the number of squares per side (max 100):", 16);
        squaresPerSide = Math.min(Math.max(parseInt(squaresPerSide, 10), 1), 100); // Validate input
        if (!isNaN(squaresPerSide)) {
            createGrid(squaresPerSide);
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
        }
    });

    // Initial grid creation
    createGrid(16);
});