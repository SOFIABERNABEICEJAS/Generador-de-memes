
const botonImagen =document.getElementById("boton-imagen")
const seccionImagen=document.getElementById("formulario-imagen")
const botonTexto = document.getElementById("boton-texto")
const seccionTexto=document.getElementById("formulario-texto")
const botonCerrarTexto= document.getElementById("boton-cerrar-texto")
const botonCerrarImagen = document.getElementById("boton-cerrar-imagen")
const botonModoOscuro= document.getElementById("boton-modo-oscuro")
const botonModoClaro=document.getElementById("boton-modo-claro")
const modoClaro=document.getElementById("modo-claro")
const mainClaro=document.getElementById("main-claro")
const botonDescargarMeme=document.getElementById("boton-descargar-meme")
const fondoSuperior =document.getElementById("fondo-superior")
const fondoInferior = document.getElementById("fondo-inferior")
const inputFondoColor = document.getElementById("input-fondo-color")
const checkboxSuperior = document.getElementById("checkbox-superior") 
const checkboxInferior= document.getElementById("checkbox-inferior")
const textoSuperior= document.getElementById("texto-superior")
const inputTextoSuperior = document.getElementById("input-texto-superior")
const textoInferior= document.getElementById("texto-inferior")
const inputTextoInferior=document.getElementById("input-texto-inferior")
const inputTextoColor = document.getElementById("input-texto-color")
const inputTamañoDeLetra = document.getElementById("input-tamaño-de-letra")
const selectEstiloLetra = document.getElementById("select-estilo-letra")
const botonContornoClaro = document.getElementById("boton-contorno-claro")
const botonContornoOscuro = document.getElementById("boton-contorno-oscuro")
const botonSinContorno = document.getElementById("boton-sin-contorno")
const selectInterlineado = document.getElementById("select-interlineado")
const inputTamañoEspaciado= document.getElementById("input-tamaño-espaciado")
const inputColorFondoMeme = document.getElementById("input-color-fondo-meme")
const espacioMeme = document.getElementById("fondo-espacio-meme")
const contenedorCentral = document.getElementById("contenedor-central")
const botonTextoIzquierda=document.getElementById("boton-texto-izquierda")
const botonTextoCentro=document.getElementById("boton-texto-centro")
const botonTextoDerecha=document.getElementById("boton-texto-derecha")
const inputImagen = document.getElementById("input-imagen")
const espacioImagen = document.getElementById("espacio-imagen")
const inputBrillo = document.getElementById("input-brillo")
const inputOpacidad= document.getElementById("input-opacidad")
const inputContraste= document.getElementById("input-contraste")
const inputDesenfoque=document.getElementById("input-desenfoque")
const inputEscalaGrises=document.getElementById("input-escala-grises")
const inputSepia=document.getElementById("input-sepia")
const inputHue=document.getElementById("input-hue")
const inputSaturado=document.getElementById("input-saturado")
const inputNegativo=document.getElementById("input-negativo")
const botonRestablecerFiltros = document.getElementById("boton-restablecer-filtros")
const inputFondoTransparente = document.getElementById("input-fondo-transparente")
const body=document.getElementById("body")
const seleccionarFondoMeme = document.getElementById("seleccionar-fondo-meme")

// BOTON IMAGEN APARECER//

botonImagen.onclick=()=>{    
seccionImagen.style.display="flex"
seccionTexto.style.display="none"
}

//BOTON CERRAR IMAGEN//

botonCerrarImagen.onclick=()=>{
 seccionImagen.style.display="none"

}

//BOTON TEXTO ABRIR//

botonTexto.onclick=()=>{
 seccionTexto.style.display="flex"
 seccionImagen.style.display="none"
}

//BOTON CERRAR TEXTO//

botonCerrarTexto.onclick=()=>{
  seccionTexto.style.display="none" 
}

//BOTON MODO OSCURO MODO CLARO//

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
     botonRestablecerFiltros.classList.remove("seccion-claro")
     body.classList.remove("main-claro")
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
     body.classList.add("main-claro")
    botonRestablecerFiltros.classList.add("seccion-claro")
  }
  
}
 
//ESCRIBIR VALOR EN TEXTO SUPERIOR//

inputTextoSuperior.oninput=()=>{
 textoSuperior.textContent=inputTextoSuperior.value
}

//ESCRIBIR VALOR EN TEXTO INFERIOR//

inputTextoInferior.oninput=()=>{
  textoInferior.textContent=inputTextoInferior.value
}

//OCULTAR TEXTO SUPERIOR//

checkboxSuperior.onclick=()=>{ 
  fondoSuperior.classList.toggle("ocultar")
  }
  
 //OCULTAR TEXTO INFERIOR//

 checkboxInferior.onclick=()=>{
   fondoInferior.classList.toggle("ocultar")
  
}
  
//BOTONES PARA ALINEAR TEXTO IZQUIERDA-CENTRO-DERECHA//

  
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


//CAMBIAR COLOR DEL TEXTO

inputTextoColor.oninput=()=>{
  textoSuperior.style.color=inputTextoColor.value
  textoInferior.style.color=inputTextoColor.value
}

//CAMABIAR COLOR DEL FONDO//

inputFondoColor.oninput=()=>{
  fondoSuperior.style.backgroundColor=inputFondoColor.value
  fondoInferior.style.backgroundColor=inputFondoColor.value
}


//CAMBIAR ESTILO DE LETRA//

  selectEstiloLetra.addEventListener("change", () =>{
    textoSuperior.style.fontFamily = selectEstiloLetra.value;
    textoInferior.style.fontFamily = selectEstiloLetra.value;
  })

//CAMBIAR TAMAÑO DE LETRA//
    
    inputTamañoDeLetra.addEventListener("input", () =>{
     textoSuperior.style.fontSize =inputTamañoDeLetra.value + "px"
    textoInferior.style.fontSize = inputTamañoDeLetra.value + "px"
    })


//FONDO TRANSPARENTE //

 
  inputFondoTransparente.onclick=()=>{
    if(inputFondoTransparente.checked){
      fondoSuperior.classList.add("transparente-contenedor-central")
      textoSuperior.classList.add("transparente-texto-superior")
      fondoInferior.classList.add("transparente-contenedor-central")
      textoInferior.classList.add("transparente-texto-inferior")
      
  

    }
    else{
      fondoSuperior.classList.remove("transparente-contenedor-central")
      textoSuperior.classList.remove("transparente-texto-superior")
      fondoInferior.classList.remove("transparente-contenedor-central")
      textoInferior.classList.remove("transparente-texto-inferior")
    

    }

  
}


//CAMBIAR CONTORNO CLARO-OSCURO//

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


//CAMBIAR TAMAÑO DEL FONDO SUPERIOR-INFERIOR//


inputTamañoEspaciado.oninput=()=>{
  textoSuperior.style.padding = inputTamañoEspaciado.value + "px"
  textoInferior.style.padding = inputTamañoEspaciado.value + "px"
}


//INTERLINEADO//


selectInterlineado.oninput =()=>{
  textoSuperior.style.lineHeight= selectInterlineado.value 
  textoInferior.style.lineHeight= selectInterlineado.value 

}


//INSERTAR UNA IMAGEN //

inputImagen.oninput=()=>{

  espacioImagen.src = inputImagen.value
}

//COLOR DE FONDO//

inputColorFondoMeme.oninput=()=>{
  espacioMeme.style.backgroundColor= inputColorFondoMeme.value
}

//EFECTO DE FONDO//




seleccionarFondoMeme.onchange=()=>{


   espacioMeme.style.backgroundImage = `url("${inputImagen.value}")`

  if(seleccionarFondoMeme.value === "aclarar"){
   espacioMeme.style.backgroundBlendMode = "lighten"

   }
    else if(seleccionarFondoMeme.value === "oscurecer"){
    espacioMeme.style.backgroundBlendMode = "darken"
   } 
   else if(seleccionarFondoMeme.value === "diferencia"){
    espacioMeme.style.backgroundBlendMode="difference"
   }
   else if(seleccionarFondoMeme.value === "iluminocidad"){
    espacioMeme.style.backgroundBlendMode = "luminosity"
   }
   else if(seleccionarFondoMeme.value === "multiplicar"){
    espacioMeme.style.backgroundBlendMode = "multiply"
   }
   else{  espacioMeme.style.backgroundBlendMode = "none"

    }
        
    
}


//FILTROS//

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


//RESTABLECER FILTROS//

 

botonRestablecerFiltros.onclick=()=>{
  espacioMeme.style.filter="none"

}

//DESCARGAR MEME//


botonDescargarMeme.onclick = () => {
  domtoimage.toBlob(contenedorCentral)
  .then(function (blob) {
    window.saveAs(blob, "haceTuPropioMeme.png");
  });
}
