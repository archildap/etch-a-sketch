const container = document.querySelector('.container');
const button = document.querySelector('.btn');


for(let i = 0; i < 272; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
        square.style.cssText = "background: black;";
    })
})


