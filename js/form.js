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



const regexCorreo = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
const regexNombreApellido = /^[A-z]{1,30}$/;
const regexUsuario = /^[a-zA-Z0-9]{4,16}$/;// Letras, numeros
const pass = /^.{6,20}$/; // 4 a 12 digitos.


  if (regexUsuario.test(usuario.value) || usuario.value == null) {
    document.getElementById("errorUsuario").classList.add('ocultar')
    
  } else {
    document.getElementById("errorUsuario").classList.remove('ocultar')
  }
