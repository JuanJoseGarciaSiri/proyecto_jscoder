
for (let i = 3; i>0 ; i--){
  alert("Ingresa a nuestro sitio en "+i);
}

let nombre=(prompt("Ingresa tu nombre"));
let edad= Number(prompt("¿Cuál es tu edad "+nombre+"?"));
let correo=prompt("ingresa tu correo electrónico");
let pais=prompt("ingrese su pais de origen");

class usuario {
    constructor(nombre,edad,correo,pais){
        this.nombre=nombre;
        this.edad=edad;
        this.correo=correo;
        this.pais=pais;

        //FUNCION
       this.presentacion=function (){
        console.log("el nombre del usuario es "+nombre);
        console.log("La edad del usuario es "+edad);
        console.log("el correo del usuario es "+correo );
        console.log("el usuario proviene de "+pais);
       }
    }

}

const usuarioNuevo= new usuario(nombre,edad,correo,pais);
usuarioNuevo.presentacion();

const MAYOR=18;
if (edad >= MAYOR){
    alert("Bienvenido/a a nuestra tienda "+ usuarioNuevo.nombre+" aquí vas a encontrar todos los talles de adulto y equipaciones deportivas para que rindas a tu maximo potencial");

}
    else if (edad < MAYOR){
        alert("Bienvenido/a a nuestra tienda "+usuarioNuevo.nombre+" tenemos todos los talles junior para todos los deportes en categorías inferiores");
    }
        else {
        alert("Debes ingresar un numero si quieres nuestras recomendaciones");
}
    


let favorito=(prompt("¿Cuál es tu deporte favorito?"));
let fav=favorito.toLowerCase();

while (fav != "esc"){
switch (fav){
        case "futbol" : alert("Como novedad de esta semana tenemos las camisetas de la Premier League 2022/2023");
        break
        case "basketball" : alert("Te presentamos la camiseta autografiada por Kevin Durant");
        break
        case "automovilismo": alert("Tenemos las equipaciones de todas las escuderías");
        break
        case "tenis" : alert("Raquetas, pelotas, lo que necesites, lo tenemos");
        break 
        case "futbol americano": alert(" Todos los jerseys de la NFL pueden ser tuyos");
        break
        case "rugby": alert("Las camisetas de Los Teros, Los Pumas, pueden ser tuyas, pasá a echarles un vistazo");
        break

        default : alert("Deporte no encontrado, actualmente trabajamos con futbol, basketball, automovilismo, tenis, futbol americano y rugby, ingresa esc si quieres continuar al sitio ");
        break;
    }
    fav=prompt("¿Cuál es tu deporte favorito?");
}


//ARREGLO DE OBJETOS//
const articulos=[
    {nombre:"zapatos",
    precio: 2000,},
    {nombre:"medias",
    precio: 200},
    {nombre:"pelotas",
    precio: 1300},
    {nombre:"redes",
    precio:200},
    {nombre:"canilleras",
    precio : 450},
    {nombre:"palos",
    precio:1000},
    {nombre:"shorts",
    precio:370},
    {nombre:"hombreras",
    precio:800},
    {nombre:"jerseys",
    precio:3000},
    {nombre:"camisetas",
    precio:2500},
    {nombre:"raquetas",
    precio: 1400},
    {nombre:"cascos",
    precio:3200}
    ]; 

    //FUNCION DE ORDEN SUP FOREACH 
    articulos.forEach((articulo)=>{  
        console.log(articulo.nombre);
    })
    
    //FUNCION DE ORDEN SUP FIND
    let articuloElegido=prompt("ingrese el articulo a comprar (ver articulos disponibles en consola)");
    articulos.find ((articulo) =>{ if (articulo.nombre === articuloElegido) alert(articulo.nombre +" "+"$"+articulo.precio)
    });
    

let locales=Number(prompt("ingrese la cantidad de torneos locales de su equipo favorito"));
let continentales=Number(prompt("ingrese la cantidad de torneos continentales de su equipo favorito"));
let mundiales= Number(prompt("ingrese la cantidad de torneos mundiales de su equipo favorito"));

class equipo{
 constructor(locales,continentales,mundiales){
    this.locales=locales;
    this.continentales=continentales;
    this.mundiales=mundiales;
    
    //FUNCION
    this.glorias=function(a,b,c){
        let suma = a+b+c;
        alert("Su equipo tiene un palmarés de "+suma+" trofeos")
    }
    }
}

let cuadro=new equipo(locales,continentales,mundiales);
cuadro.glorias(locales,continentales,mundiales);
