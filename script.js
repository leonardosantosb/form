const buttonLogin = document.getElementById("loginButton")
buttonLogin.addEventListener("click",function(){
  let emailLogin = document.getElementById("email").value
  let senhaLogin = document.getElementById("password").value
  if(emailLogin === "tryber@teste.com" && senhaLogin === "123456"){
    alert("Olá, Tryber!")
  }else{
    alert("Email ou senha inválidos.")
  }
})