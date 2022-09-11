const formRef = document.querySelector(".login-form");

const onSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);

  formRef.reset();
};

formRef.addEventListener("submit", onSubmit);
