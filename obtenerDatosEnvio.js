const comprobar = () =>{
    let name = document.getElementById("getName").value;
    let numberPhone = document.getElementById("getTel").value;
    let direccion = document.getElementById("getDirec").value;
    let colonia = document.getElementById("getCol").value;
    let municipio = document.getElementById("getMun").value;
    let estado = document.getElementById("getEst").value;
    let codigoPostal = document.getElementById("getCP").value;
    let numeroDeTarjeta = document.getElementById("getNumCard").value;
    let fechaVencimiento = document.getElementById("getDate").value;
    let cVV = document.getElementById("getCVV").value;
    name = name.trim();
    numberPhone = numberPhone.trim();
    direccion = direccion.trim();
    colonia = colonia.trim();
    municipio = municipio.trim();
    estado = estado.trim();
    codigoPostal = codigoPostal.trim();
    numeroDeTarjeta = numeroDeTarjeta.trim();
    fechaVencimiento = fechaVencimiento.trim();
    cVV = cVV.trim();
    if (name != "" && numberPhone != "" && direccion != "" && colonia != "" && municipio != "" && estado != "" && codigoPostal != "" && numeroDeTarjeta != "" && fechaVencimiento != "" && cVV != ""){
        alert("Su pedido se está procesando");
        let envio = true;
        localStorage.setItem("banderaEnvio", JSON.stringify(envio));
        setTimeout(() => {
            window.location.href = "../html/helloWorldMainPage.html";
        }, 100);
    }
    else {
        alert("Asegurese de llenar los campos correctamente");
    }
    return false;
}