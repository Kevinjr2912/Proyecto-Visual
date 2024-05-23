let btn_registrar = document.getElementById('registrer');
let listaUsuario = [];
let verificarListaUsuario = localStorage.getItem('lista');

if(verificarListaUsuario){
    listaUsuario = JSON.parse(verificarListaUsuario);
}
else{
    listaUsuario = [];
}

btn_registrar.addEventListener('click', function(){
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if(name === "" || email === "" || password === ""){
        alert('Debes llenar todos los campos')
    }
    else{
        alert('Formulario enviado correctamente');

        let objeto = {
            name: name,
            email: email,
            password: password
        }

        listaUsuario.push(objeto);
        localStorage.setItem('lista',JSON.stringify(listaUsuario));

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }
});

let btn_iniciarSesion = document.getElementById('iniciarSesion');
btn_iniciarSesion.addEventListener('click',function(){
window.location.href = 'InicioSesion.html';
});