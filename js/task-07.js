const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputRef.value}px`;

const onInput = (event) => {
  textRef.style.fontSize = `${event.target.value}px`;
};

inputRef.addEventListener("input", onInput);
