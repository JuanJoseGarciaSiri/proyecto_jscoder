
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

//para proxima entrega sera estilizada como un catalogo con fotos//

//modifico las listas de productos del HTML desde js
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

//SECCION FORMULARIOS E INFO DEL USUARIO//////
let formTitulo= document.createElement("h3");
formTitulo.innerHTML="<h3>REGISTRO PARA COMPRA</h3>";
let ubiTitulo = document.getElementsByClassName("formT")[0];
ubiTitulo.appendChild(formTitulo);

 boton.onmousemove = () => {
   console.log("el mouse se esta moviendo, el usuario no esta afk");
 }


let form = document.getElementById("formulario");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let mail =document.getElementById("mail").value;
    let telefono=document.getElementById("telefono").value;
    let articulo=document.getElementById("articulo").value;
   
    // CREO EL USUARIO CON LOS DATOS DEL FORMULARIO
    const usuario=crearUsuarioNuevo(nombre,apellido,mail,telefono,articulo);
    // MUESTRO EN CONSOLA EL MENSAJE
    console.log("Formulario Enviado,", usuario.nombre);
    //GUARDO EN EL LOCALSTORAGE AL USUARIO
    savedUser(usuario);
    //MUESTRO LOS DATOS QUE GUARDE
    showUser(usuario);
});

//FUNCIONES
function crearUsuarioNuevo(nombre,apellido,mail,telefono,articulo){
    let usuarioNuevo={
    nombre : nombre,
    apellido : apellido,
    mail: mail,
    telefono : telefono,
    articulo : articulo,
};
    return usuarioNuevo;
}

function savedUser(usuario){
    localStorage.setItem("usuario",JSON.stringify(usuario));
};

function showUser(usuario){
    localStorage.getItem("usuario");
    //MUESTRO LOS VALORES EN LA CONSOLA PARA VERIFICAR QUE FUNCIONA JEJE
    console.log(usuario.nombre, usuario.apellido, usuario.mail, usuario.telefono, usuario.articulo);
}

//BIENVENIDA AL COMIENZO DE LA PAGINA AL REFRESCAR, USANDO INFO GUARDADA EN LOCALSTORAGE
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("usuario")) {

      //traigo la info desde el storage  
      let usuariostorage = JSON.parse(localStorage.getItem("usuario"));
      
      //creo el elemento que va a tener el mensaje
      let mensajeUsuario = document.createElement("h2");
      mensajeUsuario.innerText = `Bienvenido/a de nuevo ${usuariostorage.nombre} ${usuariostorage.apellido}!`;
      
      //linkeo con mi div en html
      let mensaje = document.getElementById("bienvenida");
      mensaje.appendChild(mensajeUsuario);
    }
  });
  
