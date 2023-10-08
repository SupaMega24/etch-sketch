document.addEventListener('DOMContentLoaded', function () {    

    const container = document.getElementById('container');
    let isDrawing = false;

    const numberOfRows = 24;
    const numberOfCols = 24;

    for (let i = 0; i < numberOfRows * numberOfCols; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);

        div.addEventListener('mouseover', function (event) {
            if (isDrawing) {
                const randomColor = getRandomColor();
                event.target.style.backgroundColor = randomColor;
            }
        });
        
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        
    }

    document.addEventListener('mousedown', function () {
        isDrawing = true;
    });

    document.addEventListener('mouseup', function () {
        isDrawing = false;
    });

    const clearGridButton = document.getElementById('clear-grid');
    
    clearGridButton.addEventListener('click', function () {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => item.style.backgroundColor = '');
    });
    

});



const button = document.querySelector('button');
button.style.height = '44px';
button.style.width = '200px';
button.style.fontSize = '24px';
button.style.margin = 'auto';
button.style.borderRadius = '6px';