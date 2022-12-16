const body = document.querySelector("body");
const container = document.querySelector("main");

function createCanvas(resolution) {
  container.classList.add("container");
  container.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
  body.appendChild(container);
  let numberOfSquares = resolution ** 2;
  for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
  }
  const squares = document.querySelectorAll(".square");
  Array.from(squares).forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      square.classList.add("drawn");
    });
  });
}

const button = document.querySelector("button");
button.addEventListener("click", changeResolution);

function changeResolution() {
  let input;
  while (!(input >= 1 && input <= 100)) {
    input = prompt("Enter a resolution between 1 and a 100");
  }
  let square = container.lastElementChild;
  while (square) {
    container.removeChild(square);
    square = container.lastElementChild;
  }
  container.remove();
  createCanvas(input);
}
createCanvas(16);
