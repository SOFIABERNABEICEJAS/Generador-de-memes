// boton imagen abrir-cerrar
let botonImagen =document.getElementById("boton-imagen")
let seccionImagen=document.getElementById("formulario-imagen")

botonImagen.onclick=()=>{    
seccionImagen.style.display="flex"
seccionTexto.style.display="none"
}

let botonCerrarImagen = document.getElementById("boton-cerrar-imagen")

botonCerrarImagen.onclick=()=>{
 seccionImagen.style.display="none"

}

// boton texto abrir-cerrar
let botonTexto = document.getElementById("boton-texto")
let seccionTexto=document.getElementById("formulario-texto")

botonTexto.onclick=()=>{
 seccionTexto.style.display="flex"
 seccionImagen.style.display="none"
}
 
let botonCerrarTexto= document.getElementById("boton-cerrar-texto")

botonCerrarTexto.onclick=()=>{
  seccionTexto.style.display="none" 
}

//boton modo oscuro, boton modo claro

let botonModoOscuro= document.getElementById("boton-modo-oscuro")
let botonModoClaro=document.getElementById("boton-modo-claro")
let modoClaro=document.getElementById("modo-claro")
let mainClaro=document.getElementById("main-claro")
let botonDescargarMeme=document.getElementById("boton-descargar-meme")
let botonClaro=document.getElementById("boton-claro")

botonModoOscuro.onclick=()=>{
  if(botonModoClaro.style.display="block"){
    botonModoOscuro.style.display="none"
    modoClaro.classList.remove("header-claro")
     seccionImagen.classList.remove("seccion-claro")
     seccionTexto.classList.remove("seccion-claro")
     mainClaro.classList.remove("main-claro")
     botonImagen.classList.remove("botones-claro")
     botonTexto.classList.remove("botones-claro")
     botonModoOscuro.classList.remove("botones-claro")
     botonModoClaro.classList.remove("botones-claro")
     botonDescargarMeme.classList.remove("botones-claro")
     botonClaro.classList.remove("seccion-claro")
  }
  
}

botonModoClaro.onclick=()=>{
  if(botonModoOscuro.style.display="block"){
    botonModoClaro.style.display="none"
     modoClaro.classList.add("header-claro")
     seccionImagen.classList.add("seccion-claro")
     seccionTexto.classList.add("seccion-claro")
     mainClaro.classList.add("main-claro")
     botonImagen.classList.add("botones-claro")
     botonTexto.classList.add("botones-claro")
     botonModoOscuro.classList.add("botones-claro")
     botonModoClaro.classList.add("botones-claro")
     botonDescargarMeme.classList.add("botones-claro")
     botonClaro.classList.add("seccion-claro")
  }
  
}

let textoSuperior= document.getElementById("texto-superior")
let inputTextoSuperior = document.getElementById("input-texto-superior")

inputTextoSuperior.oninput=()=>{
 textoSuperior.textContent=inputTextoSuperior.value
}

let textoInferior= document.getElementById("texto-inferior")
let inputTextoInferior=document.getElementById("input-texto-inferior")

inputTextoInferior.oninput=()=>{
  textoInferior.textContent=inputTextoInferior.value
}

let inputTextoColor= document.getElementById("input-texto-color")

inputTextoColor.oninput=()=>{
  textoSuperior.style.color=inputTextoColor.value
  textoInferior.style.color=inputTextoColor.value
}