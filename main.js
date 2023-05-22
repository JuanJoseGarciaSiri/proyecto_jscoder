
//CABECERA//

let titulo = document.getElementsByClassName("presentacion")[0];
titulo.innerHTML= "<h1>BIENVENIDO A CHAMPIONS STORE</h1>";

let subtitulo =  document.getElementsByClassName("subtitulo")[0];
subtitulo.innerHTML="<h2> La tienda mas Gloriosa de todo Uruguay </h2>";

//items menu principal//
let items = document.getElementsByClassName("menuitem");
items[0].innerHTML="home";
items[1].innerHTML="Nosotros";
items[2].innerHTML="Promociones";
items[3].innerHTML="Contacto";


///SECCIONES///

//SECCION DEPORTES//
let listaDep = document.createElement("ul");
listaDep.innerHTML="<li> Futbol </li> <li> Basketball </li> <li> Rugby </li> <li> Hockey </li> <li> Futbol Americano</li> ";
let seclistaDep = document.getElementsByClassName("listaDep")[0];
seclistaDep.appendChild(listaDep);

let deportes = document.createElement("h3");
deportes.innerHTML="<h3>DEPORTES</h3>";
let secdeportes = document.getElementsByClassName("deportes")[0];
secdeportes.appendChild(deportes);

//SECCION INDUMENTARIA//
let listaInd = document.createElement("ul");
listaInd.innerHTML="<li> Premier League</li><li> liga Uruguaya</li><li> liga Argentina</li><li> liga española</li><li> Brasileirao </li><li> NBA </li><li> NFL </li><li> Superliga Rugby </li>";
let listaubicacion= document.getElementsByClassName("listaIN")[0];
listaubicacion.appendChild(listaInd);

let ind = document.createElement("h3");
ind.innerHTML="<h3>INDUMENTARIAS</h3>";
let indumen= document.getElementsByClassName("indu")[0];
indumen.appendChild(ind);

//SECCION CALZADO//
let listaCalz = document.createElement("ul");
listaCalz.innerHTML="  <li> Nike </li><li> Adidas </li><li> Puma </li><li> Umbro </li><li> Topper </li>";
let listaubCalz= document.getElementsByClassName("listaC")[0];
listaubCalz.appendChild(listaCalz);

let elementoLista = document.getElementsByClassName("listaC")[0].querySelector("li");

elementoLista.addEventListener('mouseover', function(event) {
    console.log("el usuario esta viendo el calzado",event);
});

let cal = document.createElement("h3");
cal.innerHTML="<h3>CALZADOS</h3>";
let ubcal= document.getElementsByClassName("calzado")[0];
ubcal.appendChild(cal);

//SECCION ACCESORIOS//
let listaAc=document.createElement("ul");
listaAc.innerHTML="<li> Palos de Hockey</li><li> Medias Deportivas</li><li> Pelotas de Futbol</li><li> Pelotas de Rugby</li><li> Balon de NFL</li>";
let ubiLista=document.getElementsByClassName("listAccesorios")[0];
ubiLista.appendChild(listaAc);

let acces= document.createElement("h3");
acces.innerHTML="<h3>ACCESORIOS</h3>";
let ubiAc = document.getElementsByClassName("accesorios")[0];
ubiAc.appendChild(acces);

//SECCION FORMULARIOS
let formTitulo= document.createElement("h3");
formTitulo.innerHTML="<h3>REGISTRO PARA COMPRA</h3>";
let ubiTitulo = document.getElementsByClassName("formT")[0];
ubiTitulo.appendChild(formTitulo);

let form = document.getElementById("formulario");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Su formulario ha sido enviado");
});

 boton.onmousemove = () => {
   console.log("el mouse se esta moviendo, el usuario no esta afk");
 }

let formul = document.getElementById("formulario");
form.addEventListener('change', function(evento) {
    let cambiado = evento.target;
    console.log("El elemento ha sido modificado: ", cambiado);
});

//STORAGE///