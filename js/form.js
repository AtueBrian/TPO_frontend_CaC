//! estilos
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


//! Validaciones
var nombre = document.getElementById('nombre')
var usuario = document.getElementById('usuario')
var contra = document.getElementById('contra')
var contra2 = document.getElementById('contra2')
var correo = document.getElementById('correo')
var telefono = document.getElementById('telefono')
var mensaje = document.getElementById('mensaje')
var formularioContacto = document.getElementById('formularioContacto')
var formularioRegistro = document.getElementById('formularioRegistro')





const regexCorreo = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
const regexNombreApellido = /^[A-z]{1,30}$/;
const regexUsuario = /^[a-zA-Z0-9]{4,16}$/;// Letras, numeros
const pass = /^.{6,20}$/; // 4 a 12 digitos.
const regexTelefono = /^[0-9]{9,16}$/

function registroValidacion(e){
  let errorUsuario = regexUsuario.test(usuario.value)
  let errorContra = pass.test(contra.value)
  let errorContra2 = contra.value == contra2.value
  let errorCorreo = regexCorreo.test(correo.value)


  if(errorUsuario){ 
    let error = document.getElementsByClassName('error-span')
    error[0].innerHTML ='<p class="bien">Usuario correcto</p>' 

  }else{
    let error = document.getElementsByClassName('error-span')
    error[0].innerHTML ='<p class="error">Error!, Formato de Usuario incorrecto. Solo letras y numero entre 4 y 16 digitos</p>'
    e.preventDefault();
  }
  
  if(errorContra){ 
    let error = document.getElementsByClassName('error-span')
    error[1].innerHTML ='<p class="bien">Contraseña correcta</p>' 

  }else{
    let error = document.getElementsByClassName('error-span')
    error[1].innerHTML ='<p class="error">Error!, Formato de Contraseña incorrecto. Tiene que tener entre 6 y 20 digitos</p>'
    e.preventDefault();
  }

  if(errorContra2){ 
    let error = document.getElementsByClassName('error-span')
    error[2].innerHTML ='<p class="bien">Contraseñas Iguales</p>' 

  }else{
    let error = document.getElementsByClassName('error-span')
    error[2].innerHTML =' <p class="error">Error!, Las Contraseñas no coinciden</p>'
    e.preventDefault();
  }

  if(errorCorreo){ 
    let error = document.getElementsByClassName('error-span')
    error[3].innerHTML ='<p class="bien">Mail correcto</p>' 

  }else{
    let error = document.getElementsByClassName('error-span')
    error[3].innerHTML ='<p class="error">Error!, El formato del correo es Invalido. ejemplo@empresa.cc</p>'
    e.preventDefault();
  }

  if(errorContra === true && errorContra2 === true && errorCorreo === true && errorUsuario === true){
    alert('Registro Exitoso')
  }

  localStorage.setItem("usuario", usuario.value)
  localStorage.setItem("pass", contra.value)

}


function contactoValidacion(e){
  let errorNombre = regexNombreApellido.test(nombre.value)
  let errorCorreo = regexCorreo.test(correo.value)
  let errorTelefono = regexTelefono.test(telefono.value)
  let errorMensaje = mensaje.value != ''

  if(errorNombre){ 
    let error = document.getElementsByClassName('error-span')
    error[0].innerHTML ='<p class="bien">Nombre correcto</p>' 

  }else{
    let error = document.getElementsByClassName('error-span')
    error[0].innerHTML ='<p class="error">Error!, El nombre debe tener solo letras entre 1 a 30 digitos</p>'
    e.preventDefault();
  }

  if(errorCorreo){ 
    let error = document.getElementsByClassName('error-span')
    error[1].innerHTML ='<p class="bien">Mail correcto</p>' 

  }else{
    let error = document.getElementsByClassName('error-span')
    error[1].innerHTML ='<p class="error">Error!, El formato del correo es Invalido. ejemplo@empresa.cc</p>'
    e.preventDefault();
  }
  
  if(errorTelefono){ 
    let error = document.getElementsByClassName('error-span')
    error[2].innerHTML ='<p class="bien">Telefono correcto</p>' 

  }else{
    let error = document.getElementsByClassName('error-span')
    error[2].innerHTML ='<p class="error">Error!, el telefono tiene que tener codigo de area, sin +54 </p>'
    e.preventDefault();
  }

  if(errorMensaje){ 
    let error = document.getElementsByClassName('error-span')
    error[3].innerHTML ='<p class="bien">El mensaje correcto</p>' 

  }else{
    let error = document.getElementsByClassName('error-span')
    error[3].innerHTML =' <p class="error">Error!, Debe Incluir un mensaje</p>'
    e.preventDefault();
  }



  // if(errorNombre === true && errorCorreo === true && errorTelefono === true && errorMensaje === true){
  //   alert('Mensaje enviado Correctamente')
  // }
}


function verificacoinFormulario(){
  if(formularioContacto != null){
    addEventListener("submit", contactoValidacion)
  }else{
    addEventListener("submit", registroValidacion)
  }

}

verificacoinFormulario()




// formularioContacto.addEventListener("submit", contactoValidacion)
// formularioRegistro.addEventListener("submit", registroValidacion)
