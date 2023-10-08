document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    let isDrawing = false;

    const numberOfRows = 16;
    const numberOfCols = 16;

    for (let i = 0; i < numberOfRows * numberOfCols; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);

        div.addEventListener('mouseover', function (event) {
            if (isDrawing) {
                event.target.style.backgroundColor = '#3498db';
            }
        });
    }

    document.addEventListener('mousedown', function () {
        isDrawing = true;
    });

    document.addEventListener('mouseup', function () {
        isDrawing = false;
    });
});

