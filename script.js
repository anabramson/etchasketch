document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });

        container.appendChild(square);
    }
});