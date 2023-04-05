document.addEventListener('DOMContentLoaded', function() {
 //* formulario
let form = document.querySelector("#login-form");
 //* input email
 console.log(form);
let email = document.querySelector("#input-email");
console.log(email);
 //* input password
let password = document.querySelector("#password-input");

function validate() {
  
  let emailValue = email.value; //* capturo lo que  usuario escribo en el input email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(emailValue)) {
    document.querySelector("#emailHelp").innerHTML = "Por favor, ingresa un correo electronico válido";
    return false;
  } 

  //* Contraseña
  let passwordValue = password.value;
  if(passwordValue.length < 6) {

    document.querySelector("#passwordHelp").innerHTML = "La contraseña debe tener al menos 6 caracteres";
    return false;
  }
  //* Si todo esta bien pasaron todas las validaciones, retornamos TRUE
  return true;
}

form.addEventListener("submit", function(event) {

  if(!validate()) {
    event.preventDefault();
    //* impido que se envie el formulario
  } else {
    alert("El formulario se envio correctamente");
  }
});

}
);