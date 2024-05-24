import bandera from "./script.js";

let bnt_comprar =  document.getElementById('buy');
bnt_comprar.addEventListener('click',function(){

if(bandera == false){
    
}
alert('Primero debes registrate o iniciar sesión');
});

let registro = document.getElementById('registro');
registro.addEventListener('click', function(){
window.location.href = 'RegistroOInicioSesion.html';
});

let sesion = document.getElementById('sesion');
sesion.addEventListener('click', function(){
window.location.href = 'InicioSesion.html';
});