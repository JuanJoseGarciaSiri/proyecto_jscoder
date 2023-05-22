
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
let listaDep = document.createElement("listaDep");
listaDep.innerHTML="<li> Futbol </li> <li> Basketball </li> <li> Rugby </li> <li> Hockey </li> <li> Futbol Americano</li> ";
let seclistaDep = document.getElementsByClassName("listaDep")[0];
seclistaDep.appendChild(listaDep);

let deportes = document.createElement("div");
deportes.innerHTML="<h2>DEPORTES</h2>";
let secdeportes = document.getElementsByClassName("deportes")[0];
secdeportes.appendChild(deportes);

//SECCION INDUMENTARIA//
let listaInd = document.createElement("listaInd");
listaInd.innerHTML="<li> Premier League</li><li> liga Uruguaya</li><li> liga Argentina</li><li> liga española</li><li> Brasileirao </li><li> NBA </li><li> NFL </li><li> Superliga Rugby </li>";
let listaubicacion= document.getElementsByClassName("listaIN")[0];
listaubicacion.appendChild(listaInd);

let ind = document.createElement("div");
ind.innerHTML="<h2>INDUMENTARIAS</h2>";
let indumen= document.getElementsByClassName("indu")[0];
indumen.appendChild(ind);

//SECCION CALZADO//
let listaCalz = document.createElement("listaCalz");
listaCalz.innerHTML="  <li> Nike </li><li> Adidas </li><li> Puma </li><li> Umbro </li><li> Topper </li>";
let listaubCalz= document.getElementsByClassName("listaC")[0];
listaubCalz.appendChild(listaCalz);

let cal = document.createElement("cal");
cal.innerHTML="<h2>CALZADOS</h2>";
let ubcal= document.getElementsByClassName("calzado")[0];
ubcal.appendChild(cal);

//SECCION ACCESORIOS//
let listaAc=document.createElement("listaAc");
listaAc.innerHTML="<li> Palos de Hockey</li><li> Medias Deportivas</li><li> Pelotas de Futbol</li><li> Pelotas de Rugby</li><li> Balon de NFL</li>";
let ubiLista=document.getElementsByClassName("listAccesorios")[0];
ubiLista.appendChild(listaAc);

let acces= document.createElement("acces");
acces.innerHTML="<h2>ACCESORIOS</h2>";
let ubiAc = document.getElementsByClassName("accesorios")[0];
ubiAc.appendChild(acces);

//SECCION FORMULARIOS
let formTitulo= document.createElement("formT");
formTitulo.innerHTML="<h2>REGISTRO PARA COMPRA</h2>";
let ubiTitulo = document.getElementsByClassName("formT")[0];
ubiTitulo.appendChild(formTitulo);
