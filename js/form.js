// estilos
var inputs = document.getElementsByClassName('formulario__input')
for (let i = 0;i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar')
        }else{
            this.nextElementSibling.classList.remove('fijar')

        }
    })
}

//Validaciones

const usuario = document.getElementById('usuario')
const contra = document.getElementById('usuario')
const contra2 = document.getElementById('usuario')
const correo = document.getElementById('correo')
const form = document.getElementById("form");

const expresiones = {
	usuario: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const regexCorreo = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
const regexNombreApellido = /^[A-z]{3,30}$/;
const regexUsuario = /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros
const pass = /^.{4,12}$/, // 4 a 12 digitos.


function validarCorreo() {
    if (correo.value == "") {
      correo.className = "error";
      document.getElementById("errorCorreo").innerHTML = "Ingrese el Email";
  
    } else {
      document.getElementById("errorCorreo").innerHTML = "";
      correo.className = "";
    }
  }
  


function validarEntradas() {
  if (entradas.value == "") {
    entradas.className = "error";
    document.getElementById("errorEntradas").innerHTML =
      "Ingrese la cantidad de entradas";

  } else {
    entradas.className = "";
    document.getElementById("errorEntradas").innerHTML = "";
  }
}

function validarApellido() {
  if (apellido.value == "") {
    apellido.className = "error";
    document.getElementById("errorApellido").innerHTML =
      "Ingrese el apellido";

  } else {
    apellido.className = "";
    document.getElementById("errorApellido").innerHTML = "";
  }
}

function validarNombre() {
  if (nombre.value == "") {
    nombre.className = "error";
    document.getElementById("errorNombre").innerHTML =
      "Ingrese el nombre";

  } else {
    document.getElementById("errorNombre").innerHTML = "";
    nombre.className = "";
  }
}

function validarEmail() {
  if (email.value == "") {
    email.className = "error";
    document.getElementById("errorEmail").innerHTML = "Ingrese el Email";

  } else {
    document.getElementById("errorEmail").innerHTML = "";
    email.className = "";
  }
}

function validarConfirmationEmail() {
  if (confirmationEmail.value == "") {
    confirmationEmail.className = "error";
    document.getElementById("errorConfirmationEmail").innerHTML =
      "Ingrese el Email";

  } else {
    document.getElementById("errorConfirmationEmail").innerHTML = "";
    confirmationEmail.className = "";
  }
}
// -----------------------------------------------



//------------------validacion de Envio de Form

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let error = false;
  let mensajesError = "";

  if (entradas.value == "") {
    error = true;
    mensajesError += "Ingrese la cantida de entradas deseadas\n";
    entradas.className = "error";
    document.getElementById("errorEntradas").innerHTML =
      "Ingrese la cantida de entradas deseadas";
  }
  if (apellido.value == "") {
    error = true;
    mensajesError += "Ingrese el apellido\n";
    apellido.className = "error";
    document.getElementById("errorApellido").innerHTML =
      "Ingrese el apellido";
  } else if (!regexNombreApellido.test(apellido.value)) {
    error = true;
    mensajesError += "El Apellido acepta solo letras entre 3 y 30 caracteres\n";
    apellido.className = "error";
    document.getElementById("errorApellido").innerHTML =
      "El Apellido acepta solo letras entre 3 y 30 caracteres\n";
  }

  if (nombre.value == "") {
    error = true;
    mensajesError += "Ingrese el nombre\n";
    nombre.className = "error";
    document.getElementById("errorNombre").innerHTML =
      "Ingrese el nombre";
  } else if (!regexNombreApellido.test(nombre.value)) {
    error = true;
    mensajesError += "El Nombre acepta solo letras entre 3 y 30 caracteres\n";
    nombre.className = "error";
    document.getElementById("errorNombre").innerHTML =
      "El Nombre acepta solo letras entre 3 y 30 caracteres";
  }

  if (email.value == "") {
    error = true;
    mensajesError += "Ingrese el Email\n";
    email.className = "error";
    document.getElementById("errorEmail").innerHTML = "Ingrese el Email";
  } else if (!regexEmail.test(email.value)) {
    error = true;
    mensajesError += "Formato de Email incorrecto\n";
    email.className = "error";
    document.getElementById("errorEmail").innerHTML =
      "Formato de Email incorrecto";
  }

  if (confirmationEmail.value == "") {
    error = true;
    mensajesError += "Confirme el Email\n";
    confirmationEmail.className = "error";
    document.getElementById("errorConfirmationEmail").innerHTML =
      "Ingrese el Email";
  } else if (!regexEmail.test(confirmationEmail.value)) {
    error = true;
    mensajesError += "Formato de Email incorrecto\n";
    confirmationEmail.className = "error";
    document.getElementById("errorConfirmationEmail").innerHTML =
      "Formato de Email incorrecto";
  }

  if (email.value != confirmationEmail.value) {
    error = true;
    mensajesError += "Los emails no son igual\n";
    email.className = "error";
    confirmationEmail.className = "error";
    document.getElementById("errorConfirmationEmail").innerHTML =
      "Los emails no son iguales";
  }

  let select = false;
  for (i in tarjeta) {
    if (tarjeta[i].checked) {
      select = true;
    }
  }

  if (!select) {
    error = true;
    mensajesError += "Seleccione Tarjeta de Credito\n";
    document.getElementById("errorTarjeta").innerHTML =
      "Seleccione Tarjeta de Credito";
  } else {
    document.getElementById("errorTarjeta").innerHTML = "";
  }

  if (error) {
    alert(mensajesError);
  } else {
    this.submit();
  }
});