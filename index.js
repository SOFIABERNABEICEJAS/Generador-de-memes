// boton imagen abrir-cerrar
let botonImagen =document.getElementById("boton-imagen")
let seccionImagen=document.getElementById("formulario-imagen")
let botonTexto = document.getElementById("boton-texto")
let seccionTexto=document.getElementById("formulario-texto")
let botonCerrarTexto= document.getElementById("boton-cerrar-texto")
let botonCerrarImagen = document.getElementById("boton-cerrar-imagen")
let fondoSuperior =document.getElementById("fondo-superior")
let fondoInferior = document.getElementById("fondo-inferior")
let inputFondoColor = document.getElementById("input-fondo-color")
let checkboxSuperior = document.getElementById("checkbox-superior") 
let checkboxInferior=document.getElementById("checkbox-inferior")
let textoSuperior= document.getElementById("texto-superior")
let inputTextoSuperior = document.getElementById("input-texto-superior")
let textoInferior= document.getElementById("texto-inferior")
let inputTextoInferior=document.getElementById("input-texto-inferior")
let inputTextoColor = document.getElementById("input-texto-color")
let inputTamañoDeLetra = document.getElementById("input-tamaño-de-letra")
let selectEstiloLetra = document.getElementById("select-estilo-letra")
const botonContornoClaro = document.getElementById("boton-contorno-claro")
const botonContornoOscuro = document.getElementById("boton-contorno-oscuro")
const botonSinContorno = document.getElementById("boton-sin-contorno")
const selectInterlineado = document.getElementById("select-interlineado")
const inputTamañoEspaciado= document.getElementById("input-tamaño-espaciado")
const inputColorFondoMeme = document.getElementById("input-color-fondo-meme")
const espacioMeme = document.getElementById("fondo-espacio-meme")




//boton imagen aparecer-desaparecer 
botonImagen.onclick=()=>{    
seccionImagen.style.display="flex"
seccionTexto.style.display="none"
}

//boton cerrar imagen

botonCerrarImagen.onclick=()=>{
 seccionImagen.style.display="none"

}

// boton texto abrir-cerrar

botonTexto.onclick=()=>{
 seccionTexto.style.display="flex"
 seccionImagen.style.display="none"
}

//boton cerrar texto

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
 
//escribir valor en texto superior

inputTextoSuperior.oninput=()=>{
 textoSuperior.textContent=inputTextoSuperior.value
}

// escrbir  valor en texto inferior

inputTextoInferior.oninput=()=>{
  textoInferior.textContent=inputTextoInferior.value
}


//ocultar texto superior


checkboxSuperior.onclick=()=>{
    if(checkboxSuperior.checked){
      fondoSuperior.classList.add("ocultar")
    }
    else{
      fondoSuperior.classList.remover("ocultar")
    }

  }
  
 //ocultar texto inferior 

 checkboxInferior.onclick=()=>{
   fondoInferior.classList.toggle("ocultar")
  
}
  
//botones para alinear texto izquierda, central, derecha

  let botonTextoIzquierda=document.getElementById("boton-texto-izquierda")
  let botonTextoCentro=document.getElementById("boton-texto-centro")
  let botonTextoDerecha=document.getElementById("boton-texto-derecha")
  
  botonTextoIzquierda.onclick=()=>{
   
      fondoSuperior.classList.add("alinear-texto-izquierda")
      fondoInferior.classList.add("alinear-texto-izquierda")
     }
 
  botonTextoCentro.onclick=()=>{
   fondoSuperior.classList.add("alinear-texto-centro")
    fondoInferior.classList.add("alinear-texto-centro")
     }
  
  botonTextoDerecha.onclick=()=>{
    fondoSuperior.classList.add("alinear-texto-derecha")
    fondoInferior.classList.add("alinear-texto-derecha")
   }


//cambiar color texto

inputTextoColor.oninput=()=>{
  textoSuperior.style.color=inputTextoColor.value
  textoInferior.style.color=inputTextoColor.value
}

//cambiar color fondo

inputFondoColor.oninput=()=>{
  fondoSuperior.style.backgroundColor=inputFondoColor.value
  fondoInferior.style.backgroundColor=inputFondoColor.value
}


//cambiar estilo de letra

  selectEstiloLetra.addEventListener("change", () =>{
    textoSuperior.style.fontFamily = selectEstiloLetra.value;
    textoInferior.style.fontFamily = selectEstiloLetra.value;
  })

//cambiar tamaño de letra    
    
    inputTamañoDeLetra.addEventListener("input", () =>{
     textoSuperior.style.fontSize =inputTamañoDeLetra.value + "px"
    textoInferior.style.fontSize = inputTamañoDeLetra.value + "px"
    })


 //fondo transparente

 const inputFondoTransparente = document.getElementById("input-fondo-transparente")
 
 
  inputFondoTransparente.onclick=()=>{
  if(inputFondoTransparente.checked){
    fondoSuperior.classList.add("ocultar")
    fondoInferior.classList.add("ocultar")
    
  }
  else{
    fondoSuperior.classList.remover("ocultar")
    fondoInferior.classList.remove("ocultar")
  }

 
}

//Cambiarcontorno claro-oscuro

botonContornoClaro.onclick=()=>{
  textoSuperior.classList.add("contorno-claro")
  textoInferior.classList.add("contorno-claro")
}

 botonContornoOscuro.onclick=()=>{
  textoSuperior.classList.add("contorno-oscuro")
  textoInferior.classList.add("contorno-oscuro")
 }
botonSinContorno.onclick=()=>{
  textoSuperior.classList.add("sin-contorno")
  textoInferior.classList.add("sin-contorno")

}


//cambiar tamaño del fondo superior-inferior


inputTamañoEspaciado.addEventListener("change", ()=>{
  fondoSuperior.style.height = inputTamañoEspaciado.value + "px"
  fondoInferior.style.height = inputTamañoEspaciado.value + "px"
})


//interlineado



selectInterlineado.oninput =()=>{
  textoSuperior.style.lineHeight= selectInterlineado.value 
  textoInferior.style.lineHeight= selectInterlineado.value 

}


//IMAGEN

const inputImagen = document.getElementById("input-imagen")
const espacioImagen = document.getElementById("espacio-imagen")


inputImagen.oninput=()=>{

  espacioImagen.src = inputImagen.value
}

//color del fondo

inputColorFondoMeme.oninput=()=>{
  espacioMeme.style.backgroundColor= inputColorFondoMeme.value
}

/////////NO ANDA MALDITA SEA////////

//filtros
const inputBrillo = document.getElementById("input-brillo")
const inputOpacidad= document.getElementById("input-opacidad")
const inputContraste= document.getElementById("input-contraste")
const inputDesenfoque=document.getElementById("input-desenfoque")
const inputEscalaGrises=document.getElementById("input-escala-grises")
const inputSepia=document.getElementById("input-sepia")
const inputHue=document.getElementById("input-hue")
const inputSaturado=document.getElementById("input-saturado")
const inputNegativo=document.getElementById("input-negativo")


const cambiarFiltros=()=>{

  espacioMeme.style.filter= ` brightness(${inputBrillo.value}) opacity(${inputOpacidad.value}) contrast(${inputContraste.value}%) blur(${inputDesenfoque.value}px) grayscale(${inputEscalaGrises.value}%) sepia(${inputSepia.value}%) hue-rotate(${inputHue.value}deg) saturate(${inputSaturado.value}%) invert(${inputNegativo.value})` ;
 
}

inputBrillo.addEventListener("change", cambiarFiltros)
inputOpacidad.addEventListener("change", cambiarFiltros)
inputContraste.addEventListener("change", cambiarFiltros)
inputDesenfoque.addEventListener("change", cambiarFiltros)
inputEscalaGrises.addEventListener("change", cambiarFiltros)
inputSepia.addEventListener("change", cambiarFiltros)
inputHue.addEventListener("change", cambiarFiltros)
inputSaturado.addEventListener("change", cambiarFiltros)
inputNegativo.addEventListener("change", cambiarFiltros)


//restablecer filtros

const botonRestablecerFiltros = document.getElementById("boton-restablecer-filtros");
const restablecerFiltros = () =>{
    brillo.value = 1 
    opacidad.value =1 
    contraste.value = 100
    desenfoque.value = 0
     grises.value = 0
     sepia.value = 0
    hue.value = 0
    saturado.value = 100
     negativo.value = 0
     

}

botonReestablecerFiltros.addEventListener("click", () =>{
    espacioMeme.style.filter = "none";
    restablecerFiltros();
});

const form=document.getElementById("formulario")

FormData.onisubmite=(Event)=>{
  Event.preventDefault()
}