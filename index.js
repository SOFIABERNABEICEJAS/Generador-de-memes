
let botonImagen =document.getElementById("boton-imagen")
let seccionImagen=document.getElementById("formulario-imagen")

let mostrarImagen =()=>{    
seccionImagen.style.display="flex"
seccionTexto.style.display="none"

}
botonImagen.onclick = mostrarImagen


let botonCerrarImagen = document.getElementById("boton-cerrar-imagen")

let cerrarImagen=()=>{
 seccionImagen.style.display="none"

}
botonCerrarImagen.onclick=cerrarImagen


let botonTexto = document.getElementById("boton-texto")
let seccionTexto=document.getElementById("formulario-texto")

let mostrarTexto=()=>{
 seccionTexto.style.display="flex"
 seccionImagen.style.display="none"

}
botonTexto.onclick = mostrarTexto

let botonCerrarTexto= document.getElementById("boton-cerrar-texto")

let cerrarTexto=()=>{
  seccionTexto.style.display="none"
  
}
botonCerrarTexto.onclick=cerrarTexto


let botonModoOscuro= document.getElementById("boton-modo-oscuro")
let botonModoClaro=document.getElementById("boton-modo-claro")
let ocultar=document.querySelector(".ocultar")
let mostrar=document.querySelector(".mostrar")


botonModoOscuro.onclick=()=>{
  if(botonModoClaro.style.display="flex"){
    botonModoOscuro.style.display="none"
  }
  
}



botonModoClaro.onclick=()=>{
  if(botonModoOscuro.style.display="flex"){
    botonModoClaro.style.display="none"
  }
  
}
