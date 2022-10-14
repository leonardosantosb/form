const buttonLogin = document.getElementById("loginButton");
buttonLogin.addEventListener("click", function () {
  let emailLogin = document.getElementById("email").value;
  let senhaLogin = document.getElementById("password").value;
  if (emailLogin === "tryber@teste.com" && senhaLogin === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

const checkboxBtn = document.querySelector("#agreement");
checkboxBtn.addEventListener("click", () => {
  // event.preventDefault();
  const buttonSubmit = document.querySelector("#submit-btn");
  if (checkboxBtn.checked) buttonSubmit.disabled = false;
  else buttonSubmit.disabled = true;
});
