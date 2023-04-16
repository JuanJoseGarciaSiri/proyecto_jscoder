
let nombre= prompt("Ingresa tu nombre");
alert("Bienvenido/a "+nombre+ "!");

let edad= isNaN(Number(prompt("¿Cual es tu edad "+nombre+"?")));

const MAYOR=18;

if (edad >= MAYOR){
    alert("Bienvenido/a a nuestra tienda "+nombre+" aqui vas a encontrar todos los talles de adulto y equipaciones deportivas para que rindas a tu maximo potencial");

}
else if (edad < MAYOR){
    alert("Bienvenido/a a nuestra tienda "+nombre+" tenemos todos los talles junior para todos los deportes en categorias inferiores");
}
else {
    alert("Debes ingresar un numero si quieres nuestras recomendaciones");
}

let favorito=prompt("¿Cual es tu deporte favorito?");

while (favorito != "esc"){
switch (favorito){
        case "Futbol" : alert("Como novedad de esta semana tenemos las camisetas de la Premier League 2022/2023");
        break
        case "Basketball" : alert("Te presentamos la camiseta autografiada por Kevin Durant");
        break
        case "Automovilismo": alert("Tenemos las equipaciones de todas las escuderias");
        break
        case "Tenis" : alert("Raquetas, pelotas, lo que necesites, lo tenemos");
        break 
        case "Futbol Americano": alert(" Todos los jerseys de la NFL pueden ser tuyos");
        break
        case "Rugby": alert("Las camisetas de Los Teros, Las Cimarronas, Los Pumas, Las Leonas, pueden ser tuyas, pasa a echarles un vistazo");
        break

        default : alert("Deporte no encontrado, actualmente trabajamos con Futbol, Basketball, Automovilismo, Tenis, Futbol Americano y Rugby, no olvides las Mayusculas ,ingresa esc si quieres continuar al sitio ");
        break;
    }
favorito=prompt("¿Cual es tu deporte favorito?");
}

let locales=Number(prompt("ingrese la cantidad de torneos locales de su equipo favorito"));
let continentales=Number(prompt("ingrese la cantidad de torneos continentales de su equipo favorito"));
let mundiales= Number(prompt("ingrese la cantidad de torneos mundiales de su equipo favorito"));
let resultado=0;

function gloriasDeTuEquipo (locales, continentales, mundiales){
resultado = locales + continentales + mundiales;

return (alert("Su equipo tiene un palmares de "+resultado+" trofeos"));
}

gloriasDeTuEquipo(locales, continentales, mundiales);