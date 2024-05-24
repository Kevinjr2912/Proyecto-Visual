let registro = document.getElementById("registro");
registro.addEventListener("click", function () {
  window.location.href = "RegistroOInicioSesion.html";
});

let sesion = document.getElementById("sesion");
sesion.addEventListener("click", function () {
  window.location.href = "InicioSesion.html";
});


let btn_comprar = document.getElementById("buy");
btn_comprar.addEventListener("click", function () {
  let bandera = localStorage.getItem("bandera") === "true"; 
  if (bandera) {
    window.location.href = "ingresoDeDatos.html";
  } else {
    alert("Por favor debes registrarte o iniciar sesión");
  }
});
