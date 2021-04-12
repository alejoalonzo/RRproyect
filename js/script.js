
// -----------------------------------------------------MODALES--------------------
function modalBienvenida(){
    document.getElementById("modalBienvenida").style.display="block";
    document.getElementById("tituloEncabezado").style.animationPlayState="paused";
    document.getElementById("subTituloEncabezado").style.animationPlayState="paused";
    document.getElementById("subTituloEncabezado2").style.animationPlayState="paused";
    document.documentElement.style.overflow="hidden";
}
function cerrarModalBienvenida(){
    document.getElementById("modalBienvenida").style.display="none";
    document.getElementById("tituloEncabezado").style.animationPlayState="running";
    document.getElementById("subTituloEncabezado").style.animationPlayState="running";
    document.getElementById("subTituloEncabezado2").style.animationPlayState="running";
    document.documentElement.style.overflowY="auto";// en "Y" para que no me salga la barra de scrol hacia lateral
    setInterval(heroSlideShow,4000);//setInterval: funcion de manera ciclica hasta el infinito, los dos paramertos son: la funcion y el tiempo en ms.
}

// -----------------------------------------------------CARRUSEL------------------- 
var bgCounter=0;
function heroSlideShow() {
    var listaImgBg =[//ojo con el path, si estas desde JS tiene que ser como si fuera del HTML
        "url('./media/heroImageBG.jpg')",
        "url('./media/heroImageBG2.jpg')",
        "url('./media/heroImageBG3.jpg')"
    ];
    bgCounter++;

    if(bgCounter == listaImgBg.length){//if para reinicializar 
        bgCounter = 0;
    }
    document.getElementById("encabezado").style.backgroundImage = listaImgBg[bgCounter];
}

// -----------------------------------------------------FIN CARRUSEL------------------- 

function modalDatosCliente(){
    document.getElementById("modalDatosCliente").style.display="block"; 
    document.documentElement.style.overflow="hidden";

    var nombre =document.getElementById("nombreContacto").value;
    var email =document.getElementById("emailContacto").value;
    var telefono =document.getElementById("telefonoContacto").value;
    var mensaje;
    // Pa que funcione tiene que tener el required en atributos del HTML
    (function formCheck(){
        if(!document.getElementById("nombreContacto").checkValidity()){
            mensaje = "Introduce un nombre correcto.";
            document.getElementById("textoModalCliente").innerHTML = mensaje;
        }else if(!document.getElementById("emailContacto").checkValidity()) {
            mensaje = "Introduce un E-mail correcto.";
            document.getElementById("textoModalCliente").innerHTML = mensaje;
        }else if(!document.getElementById("telefonoContacto").checkValidity()) {
            mensaje = "Introduce un número de teléfono correcto.";
            document.getElementById("textoModalCliente").innerHTML = mensaje;
        }else{
            mensaje = "Apreciado " + nombre + ". Nos pondremos en contacto con usted, enviándole un E-mal a la dirección " + email + ", o le llamaremos al número " + telefono + ". Gracias.";
            document.getElementById("textoModalCliente").innerHTML = mensaje
        }
    })();
}

function cerrarModalContacto(){
    document.getElementById("modalDatosCliente").style.display="none";
    document.documentElement.style.overflowY="auto";

    document.getElementById("nombreContacto").value = "";
    document.getElementById("emailContacto").value = "";
    document.getElementById("telefonoContacto").value = "";
    document.getElementById("comentario").value = "";
}

// -----------------------------------------------------FIN MODALES--------------------
// -----------------------------------------------------NAVBAR-------------------
var posAnteriorScrol = document.documentElement.scrollTop;

window.onscroll = function(){
    esconderMostrarMenu()
};
function esconderMostrarMenu(){
    var posActualScrol = document.documentElement.scrollTop;
    if(posAnteriorScrol>posActualScrol){
        document.getElementById("navbar").style.top = "0"
    }else
    document.getElementById("navbar").style.top = "-100px"
    posAnteriorScrol = posActualScrol;
}

// -----------------------------------------------------FIN NAVBAR-------------------

// -----------------------------------------------------LIGHTBOX-------------------  

// function lightBoxGale(){
//     document.getElementById("lightBoxGale").style.display= "block";
//     document.documentElement.style.overflow= "hidden";

//     // en esta guardo las img
//     var listaDeImg = document.getElementsByClassName("imgGal");

//     //bucle para llenar el array
//     for(var i=0; i<listaDeImg.length; i++){
//         listaRutaImg.push(listaDeImg[i].src);
//     }
//     // Se puede meter contenido en el HTML desde JS asi:
//     document.getElementById("imageToSwow").innerHTML = "<img class = 'imgLightBoxGale' src= './media/gal1.jpg'>";
// }




var listaRutaImg =[];// en esta guardo los paths 
var contadorImg = 0;

function readyLightBosx(){
    
    var listaDeImg = document.getElementsByClassName("imgGal");// en esta guardo las img

    //bucle para llenar el array
    for(var i=0; i<listaDeImg.length; i++){
        listaRutaImg.push(listaDeImg[i].src);
    }
    // Se puede meter contenido en el HTML desde JS asi:
    document.getElementById("imageToSwow").innerHTML = "<img class = 'imgLightBoxGale' src= './media/gal1.jpg'>";

    for(var i = 0; i<listaDeImg.length; i++){
        listaDeImg[i].addEventListener('click', openLightBox);
    }
    function openLightBox(){//Rellenar el Light box con la img que toca
        var pathImgClicked = event.currentTarget.src;// detecta que elemento hemos clicado
        contadorImg = listaRutaImg.indexOf(pathImgClicked);
        document.getElementById("imageToSwow").innerHTML = "<img class = 'imgLightBoxGale' src= "+listaRutaImg[contadorImg]+ ">";
        document.getElementById("lightBoxGale").style.display= "block";//aparece el modal
        document.documentElement.style.overflow= "hidden";//se esconde el scroll
        closeLightBox();
    }
    function closeLightBox(){
        window.addEventListener("click", function(event){//captura si se ha clicado en la ventana
            //comprueba si no es en la imagen, ni los botones, ni los iconos
            if(!event.target.matches(".imgLightBoxGale") && !event.target.matches(".imgGal") && !event.target.matches(".fas") && !event.target.matches(".lightBoxBtn")){
                document.getElementById("lightBoxGale").style.display= "none";//esconder el modal
                document.documentElement.style.overflowY= "auto";//aparece scrol
            }
        });
    }
    
}

function nextImg(){
    contadorImg++;
    if(contadorImg==listaRutaImg.length){
        contadorImg=0;
    }
    
    document.getElementById("imageToSwow").innerHTML = "<img class = 'imgLightBoxGale' src= "+listaRutaImg[contadorImg]+ ">";
    // console.log(contadorImg); 
}

function preImg(){
    contadorImg--;
    if(contadorImg<0){
        contadorImg=listaRutaImg.length-1;
    }
    
    document.getElementById("imageToSwow").innerHTML = "<img class = 'imgLightBoxGale' src= "+listaRutaImg[contadorImg]+ ">";
    
}
// -----------------------------------------------------FIN LIGHTBOX-------------------  


// -----------------------------------------------------PESTAÑAS------------------- 
function marcarPestana(contenedorAmostrar,tabClicked){//con parametros que seran las ids de cada pestaña

    var listaConPestanas = document.getElementsByClassName("contenedorFilo");
    for(var i=0; i<listaConPestanas.length; i++){//bucle para esconder contenedores
        listaConPestanas[i].style.display="none";
    }
    document.getElementById(contenedorAmostrar).style.display="block";//mostrar la clickada


    var tabLinks = document.getElementsByClassName("etiquetaPestana");
    for(var i=0; i<tabLinks.length; i++){//otro bucle para quitar tag select(pestanaActiva)
        tabLinks[i].classList.remove("pestanaActiva");
    }
    document.getElementById(tabClicked).classList.add("pestanaActiva");//mostramos el tag clicado
} 
// -----------------------------------------------------FIN PESTAÑAS------------------- 

// -----------------------------------------------------ACORDION------------------- 
function showAndHide() {
    var acordion = document.getElementsByClassName("accordion");

    for(var i = 0; i < acordion.length; i++){
        acordion[i].onclick= function(){
            var content = this.nextElementSibling;

            if(content.style.maxHeight){//si esta abierto, para cerrar
                content.style.maxHeight = null;
            }else{
                content.style.maxHeight = content.scrollHeight + "px";//para abrirlo y que sea dinamico
            }
        }
    } 
}



