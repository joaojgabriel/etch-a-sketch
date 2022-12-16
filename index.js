const container = document.querySelector("main");

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.append(square);
}

const squares = document.querySelectorAll(".square");

Array.from(squares).forEach((square) => {
  square.addEventListener("mouseenter", (e) => {
    square.classList.add("drawn");
  });
});
