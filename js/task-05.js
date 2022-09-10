const nameInputRef = document.querySelector("#name-input");

const onNameInput = () => {
  const nameOutputRef = document.querySelector("#name-output");
  nameInputRef.value !== ""
    ? (nameOutputRef.textContent = nameInputRef.value)
    : (nameOutputRef.textContent = "Anonymous");
};

nameInputRef.addEventListener("input", onNameInput);
