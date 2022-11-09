var form = document.getElementById('form')
var ingresarUser = document.getElementById('user')
var ingresarPass = document.getElementById('pass')
var loginUser = localStorage.getItem('usuario')
var loginPass = localStorage.getItem('pass')



function ingreso(e){


    if (ingresarPass.value === loginPass && ingresarUser.value ===loginUser){
        

    }else{
        let error = document.getElementsByClassName('error-span')
        error[0].innerHTML ='<p class="error">Contraseñas o Usuario Incorrecto</p>'
        e.preventDefault();

    }

}

form.addEventListener('submit',ingreso)