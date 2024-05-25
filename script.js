let btn_registrar = document.getElementById('registrer');
let listaUsuario = [];
let verificarListaUsuario = localStorage.getItem('lista');
let bandera = false;

if(verificarListaUsuario){
    listaUsuario = JSON.parse(verificarListaUsuario);
}
else{
    listaUsuario = [];
}

if(btn_registrar){
    btn_registrar.addEventListener('click', function(){
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let password = document.getElementById('password').value.trim();
    
        if(name === "" || email === "" || password === ""){
            alert('Debes llenar todos los campos')
        }
        else{
            alert('Registro llevado correctamente');
    
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
            bandera = true;
            localStorage.setItem('bandera', bandera);
            window.location.href = 'libr1.html';
        }
    });
}

