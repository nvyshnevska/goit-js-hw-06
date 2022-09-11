function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

const onChangeColor = (event) => {
  const currentColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor;
  colorRef.textContent = currentColor;
};

changeColorBtn.addEventListener("click", onChangeColor);
