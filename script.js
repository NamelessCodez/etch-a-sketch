function addDivs() {
    const container = document.querySelector('.div-container');
    // create a grid of divs in the given div
    for(let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.style.height = '60px';
        div.style.width = '60px';
        container.appendChild(div);
    }
}
addDivs();

function generateNewGrid(size) {
    // delete the existing grid within the container
    const container = document.querySelector('.div-container');
    container.innerHTML = ""
    const itemSize = 960 / size;
    // generate the required grid
    for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('div');
            div.style.height = `${itemSize}px`;
            div.style.width = `${itemSize}px`;
            container.appendChild(div);
    }
}

gridSize = parseInt(prompt('Enter grid size'));
generateNewGrid(gridSize);

// add hover effect
const divs = document.querySelectorAll('.div');
divs.forEach(div => div.addEventListener('mouseenter', () =>
    div.style.backgroundColor = 'white'));



