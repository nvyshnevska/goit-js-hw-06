const counterValue = document.querySelector("#value");
let initialValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');
decrementBtn.addEventListener("click", onDecrementBtn);
incrementBtn.addEventListener("click", onIncrementBtn);

function onDecrementBtn() {
  initialValue -= 1;
  counterValue.textContent = initialValue;
}

function onIncrementBtn() {
  initialValue += 1;
  counterValue.textContent = initialValue;
}
