// script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    for (let i = 0; i < 256; i++) { // 16x16 = 256
        const square = document.createElement('div');
        container.appendChild(square);
    }
});