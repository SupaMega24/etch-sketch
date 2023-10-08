document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');

    const numberOfRows = 16;
    const numberOfCols = 16;

    for (let i = 0; i < numberOfRows * numberOfCols; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
});

