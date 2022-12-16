const container = document.querySelector("main");

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.append(square);
}
