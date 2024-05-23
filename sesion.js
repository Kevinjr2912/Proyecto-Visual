let btn_sesion = document.getElementById('btn-sesion');
let listaUsuarios = [];
let comprobarLocal = localStorage.getItem('lista');

if(comprobarLocal){
    listaUsuarios = JSON.parse(comprobarLocal);
}
else{
    listaUsuarios = [];
}

btn_sesion.addEventListener('click',function(){
let usuario = document.getElementById('email').value;
let password = document.getElementById('password').value;

if(usuario === "" || password === ""){
    alert('Debes llenar todos los campos')
}
else{
    for(let i=0; i<listaUsuarios.length; i++){
        if(listaUsuarios[i].email == usuario.trim() && listaUsuarios[i].password == password.trim()){
            i = listaUsuarios.length+1;
            window.location.href = 'helloWorldMainPage.html';
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
        }

        else{
            alert('Correo electrónico o contraseña incorrectos');
        }
    }
}


});