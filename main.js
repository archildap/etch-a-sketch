const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const buttonClear = document.querySelector('.clear');
const buttonRgb = document.querySelector('.rgb');
    
function removeGrid(squares) {
    squares.forEach((square) => {
        square.remove();
    });
}

let squares = document.querySelectorAll('.square');  

function makeGrid(gridNum = 16) {
    if(gridNum > 100 || gridNum < 1) {
        gridNum = 16;
    }
    for(let i = 0; i < (gridNum*gridNum+gridNum); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.background = "black";
        });
        square.style.cssText = `height: ${600/gridNum}px; width: ${600/gridNum}px;`
        if(i === 0 || i%(gridNum +1) === 0) {
            square.style.cssText = "width: 100%; border: 0; height: 0;";
        }
    }
    squares = document.querySelectorAll('.square');
}

makeGrid();


button.addEventListener('click', () => {
    let gridNum = +prompt('Enter numbers per side to customize grid: ');
    removeGrid(squares);
    makeGrid(gridNum);
})

buttonClear.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.background ="white";
    })
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let buttonOn = 0;

function makeRgb() {
    if(buttonOn === 0) {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.style.background = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
            });
        });
        buttonOn++
    } else if(buttonOn === 1) {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.style.background = `black`;
            });
        });
        buttonOn--
    }
}

buttonRgb.addEventListener('click', makeRgb);
