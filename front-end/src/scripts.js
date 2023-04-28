// Movimiento del menú de inicio de sesión

function mostrar() {
    document.getElementById("sidebar").style.width = "400px";
    document.getElementById("contenido").style.marginRight = "400px";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginRight = "0";
    document.getElementById("open").style.display = "inline";
    document.getElementById("close").style.display = "none";
}