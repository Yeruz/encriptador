let btnEncriptar = document.querySelector(".btnEncriptar");
let btnDesencriptar = document.querySelector(".btnDesencriptar");
let btnCopiar = document.querySelector(".btnCopiar");
let btnLimpiar = document.querySelector(".btnLimpiar");
let img = document.querySelector(".cajaImg");
let msgAdvertencia = document.querySelector(".cajaAdvertencia");
let cajaResultado = document.querySelector(".cajaResultado");
let cajaCopiar = document.querySelector(".cajaCopiar");
let leyenda = document.querySelector(".cajaLeyenda");
let txtResultado = document.querySelector(".txtResultado");
var verificar = false;

/* btnLimpiar.onclick = limpiar; */
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

window.onload = ocultarEncriptado;

/* function limpiar() {
  let copyText = document.querySelector(".txtResultado").innerHTML;
  txtResultado.innerHTML = "";
  document.getElementsByClassName("txtInsertado")[0].value = "";
  mostrarContenido();
  window.onload = ocultarEncriptado;
  alert("Limpiado");
} */

function encriptar() {
  let txtInsertado = recuperarTxt();
  verificarMinusculas(txtInsertado);
  if (verificar) {
    ocultarContenido();
    mostrarEncriptado();
    txtResultado.textContent = encriptarTxt(txtInsertado);
  } else {
    alert("Ingrese solo minúsculas, SIN ACENTOS NI CARÁCTERES ESPECIALES");
  }
}

function desencriptar() {
  let txtInsertado = recuperarTxt();
  verificarMinusculas(txtInsertado);
  if (verificar) {
    ocultarContenido();
    mostrarEncriptado();
    txtResultado.textContent = desencriptarTxt(txtInsertado);
  } else {
    alert("Ingrese solo minúsculas, SIN ACENTOS NI CARÁCTERES ESPECIALES");
  }
}

function recuperarTxt() {
  let textoInsertado = document.querySelector(".txtInsertado");
  return textoInsertado.value;
}

function ocultarContenido() {
  img.classList.add("ocultar");
  msgAdvertencia.classList.add("ocultar");
  leyenda.classList.add("ocultar");
}

function ocultarEncriptado() {
  cajaResultado.classList.add("ocultar");
  cajaCopiar.classList.add("ocultar");
}

function mostrarEncriptado() {
  cajaResultado.classList.add("show");
  cajaCopiar.classList.add("show");
}

function mostrarContenido() {
  img.classList.add("show");
  msgAdvertencia.classList.add("show");
  leyenda.classList.add("show");
}

function encriptarTxt(mensaje) {
  let txt = mensaje;
  let textoFinal = "";
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (txt[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (txt[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (txt[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (txt[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + txt[i];
    }
  }
  return textoFinal;
}

function desencriptarTxt(mensaje) {
  let txt = mensaje;
  let textoFinal = "";
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (txt[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (txt[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (txt[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (txt[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + txt[i];
    }
  }
  return textoFinal;
}

function copiar() {
  let copyText = document.querySelector(".txtResultado").innerHTML;
  navigator.clipboard.writeText(copyText).then(() => {
    txtResultado.innerHTML = "";
    document.getElementsByClassName("txtInsertado")[0].value = "";
    alert("Mensaje copiado al portapapeles");
  });
}

function verificarMinusculas(texto) {
  let mayusculas = /^[a-z\s]+$/g;
  verificar = mayusculas.test(texto);
  return verificar;
}
