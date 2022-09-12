function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(Number(inputRef.value)));

function createBoxes(amount) {
  const boxesList = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxesList.push(boxEl);
  }

  boxesRef.append(...boxesList);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  boxesRef.innerHTML = "";
}
