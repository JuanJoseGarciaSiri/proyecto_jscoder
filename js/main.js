

Swal.fire(
  'Bienvenido/a a Champions Store',
  'aquí encontraras una gran diversidad de articulos deportivos y variedades',
)

//CABECERA//

//items menu principal//
let items = document.getElementsByClassName("menuitem");
items[0].innerHTML = "home";
items[1].innerHTML = "Nosotros";
items[2].innerHTML = "Promociones";
items[3].innerHTML = "Contacto";


///SECCIONES///

//para proxima entrega sera estilizada como un catalogo con fotos//

//modifico las listas de productos del HTML desde js
//SECCION DEPORTES//
let deportes = document.createElement("h3");
deportes.innerHTML = "<h3>DEPORTES</h3>";
let secdeportes = document.getElementsByClassName("deportes")[0];
secdeportes.appendChild(deportes);

//SECCION INDUMENTARIA//
let ind = document.createElement("h3");
ind.innerHTML = "<h3>INDUMENTARIAS</h3>";
let indumen = document.getElementsByClassName("indu")[0];
indumen.appendChild(ind);

//SECCION CALZADO//
let cal = document.createElement("h3");
cal.innerHTML = "<h3>CALZADOS</h3>";
let ubcal = document.getElementsByClassName("calzado")[0];
ubcal.appendChild(cal);

//SECCION FORMULARIOS E INFO DEL USUARIO//////
let formTitulo = document.createElement("h3");
formTitulo.innerHTML = "<h3>REGISTRO PARA COMPRA</h3>";
let ubiTitulo = document.getElementsByClassName("formT")[0];
ubiTitulo.appendChild(formTitulo);

// Creo el div
let divFormulario = document.createElement('div');
divFormulario.className = 'formT';

// Creo el formulario
let formulario = document.createElement('form');
formulario.id = 'formulario';

// nombre
let inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.className = 'form-control';
inputNombre.id = 'nombre';
inputNombre.placeholder = 'Nombre';
inputNombre.setAttribute('aria-label', 'First name');
inputNombre.required = true;

// apellido
let inputApellido = document.createElement('input');
inputApellido.type = 'text';
inputApellido.className = 'form-control';
inputApellido.id = 'apellido';
inputApellido.placeholder = 'Apellido';
inputApellido.setAttribute('aria-label', 'Last name');
inputApellido.required = true;

// correo electrónico
let inputMail = document.createElement('input');
inputMail.type = 'email';
inputMail.className = 'form-control';
inputMail.id = 'mail';
inputMail.placeholder = 'ej. juanitoperez@gmail.com';
inputMail.required = true;

// teléfono
let inputTelefono = document.createElement('input');
inputTelefono.type = 'tel';
inputTelefono.className = 'form-control';
inputTelefono.id = 'telefono';
inputTelefono.placeholder = 'Telefono ej.123456789';
inputTelefono.required = true;

// consultas
let divConsultas = document.createElement('div');
divConsultas.className = 'consultas';

// Creo la seccion para el artículo a comprar
let textareaArticulo = document.createElement('textarea');
textareaArticulo.className = 'form-control';
textareaArticulo.id = 'articulo';
textareaArticulo.placeholder = 'Articulo A Comprar';
textareaArticulo.required = true;

//Botones
let divBotones = document.createElement('div');
divBotones.className = 'botones';

let inputEnviar = document.createElement('input');
inputEnviar.type = 'submit';
inputEnviar.value = 'Enviar';

let inputLimpiar = document.createElement('input');
inputLimpiar.type = 'reset';
inputLimpiar.value = 'Limpiar';

// Meto los elementos al formulario
formulario.appendChild(inputNombre);
formulario.appendChild(inputApellido);
formulario.appendChild(inputMail);
formulario.appendChild(inputTelefono);
formulario.appendChild(divConsultas);

divConsultas.appendChild(textareaArticulo);
formulario.appendChild(divBotones);
divBotones.appendChild(inputEnviar);
divBotones.appendChild(inputLimpiar);


let formT = document.querySelector('.formT');
formT.appendChild(formulario);

//configuro alertas y registro del objeto usuario
let form = document.getElementById("formulario");
form.addEventListener('submit', function (event) {
  event.preventDefault();

  ///ALERTA CUANDO SE REALIZA EL REGISTRO DEL USUARIO///
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'Registrarse',
      cancelButton: 'Cancelar'
    },
    buttonsStyling: false
  })
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de tu Registro?',
    text: "Tu compra esta cada vez mas cerca!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Registrado!',
        'Tu compra ha sido agendada. Recibiras un correo de confirmación!',
        'success'
      )
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Registro cancelado',
        'Puedes volver a registrarte :)',
        'error'
      )
    }
  })

  /// ATRIBUTOS DEL OBJETO USUARIO ///
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let mail = document.getElementById("mail").value;
  let telefono = document.getElementById("telefono").value;
  let articulo = document.getElementById("articulo").value;

  // CREO EL USUARIO CON LOS DATOS DEL FORMULARIO
  const usuario = crearUsuarioNuevo(nombre, apellido, mail, telefono, articulo);
  // MUESTRO EN CONSOLA EL MENSAJE
  console.log("Formulario Enviado,", usuario.nombre);
  //GUARDO EN EL LOCALSTORAGE AL USUARIO
  savedUser(usuario);
  //MUESTRO LOS DATOS QUE GUARDE
  showUser(usuario);
});

//FUNCIONES
function crearUsuarioNuevo(nombre, apellido, mail, telefono, articulo) {
  let usuarioNuevo = {
    nombre: nombre,
    apellido: apellido,
    mail: mail,
    telefono: telefono,
    articulo: articulo,
  };
  return usuarioNuevo;
}

function savedUser(usuario) {
  localStorage.setItem("usuario", JSON.stringify(usuario));
};

function showUser(usuario) {
  localStorage.getItem("usuario");
  //MUESTRO LOS VALORES EN LA CONSOLA PARA VERIFICAR QUE FUNCIONA JEJE
  console.log(usuario.nombre, usuario.apellido, usuario.mail, usuario.telefono, usuario.articulo);
}

//BIENVENIDA AL COMIENZO DE LA PAGINA AL REFRESCAR, USANDO INFO GUARDADA EN LOCALSTORAGE
document.addEventListener('DOMContentLoaded', function () {
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


const listaProductos = document.querySelector('.lista-productos');

let boton = document.getElementById('articuloSec');
boton.addEventListener('click', function (click) {
  click.preventDefault();
  fetch('https://fakestoreapi.com/products?category=mens%20clothing')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error en la respuesta de la solicitud fetch');
      }
    })
    .then((json) => {
      json.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.title + ' - ' + product.price;
        listaProductos.appendChild(li);
      });
    })
    .catch(error => {
      console.error(error);
    });
})







