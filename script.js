// Array literal
let lista = ["Uno", "Dos", "Tres"] ;
console.log("Cantidad de Elementos: " + lista.length) ;         // Muestra la cantidad de elementos del Array
console.log(lista[0]) ;
console.log(lista[1]) ;
console.log(lista[2]) ;

// Objeto literal 
let persona = {
    nombre: "Fernando" ,
    apellido: "Diaz" ,
    edad: 55
} ;
console.log("Nombre: " + persona.nombre) ;
console.log("Apellido: " + persona.apellido) ;
console.log("Edad: " + persona.edad) ;

// Objeto literal anidado
let auto = {
    marca: "honda" ,
    tipo: "sedan" ,
    adicional : {
        aire: "si" ,
        frenos: "si" ,
        luces: "si" ,
        seguro: "no" 
    } ,
    origen: "argentina" ,
    precio: 1500000
} ;
console.log("Marca: " + auto.marca) ;
console.log("Tipo: " + auto.tipo) ;
console.log("Aire Acond.: " + auto.adicional.aire) ;
console.log("Frenos ABS: " + auto.adicional.frenos) ;
console.log("Luces Alógenas: " + auto.adicional.luces) ;
console.log("Incluye Seguro: " + auto.adicional.seguro) ;
console.log("Origen: " + auto.origen) ;
console.log("Precio: " + auto.precio) ;

// Objeto literal usando etiquetas de elementos numéricas
let producto = {
    1: "resma de papel" ,
    2: "ledesma" ,
    3: 500
} ;
console.log("Descripción: ", producto[1]) ;
console.log("Marca: ", producto[2]) ;
console.log("Precio: ", producto[3]) ;

// Logitud de una cadena de texto literal
let texto = "Este es un texto de prueba !!!" ;
console.log("texto = ", texto) ;
console.log("longitud = ", texto.length) ;
console.log("longitud = ", "Este es un texto de prueba !!!".length) ;

// Acento grave o invertido
let saludo = `Hola a todo el mundo
espero que Uds se encuentren bien 
les deseo lo mejor` ;
console.log(saludo) ;
let mensaje = `Nunca usar la tecla 'ESC' para finalizar !!!` ;
console.log(mensaje) ;

// Interpolación de cadenas (macrosustitución) usando Acento grave o invertido
let nombre = "Fernando", apellido = "Diaz" ;
console.log(`Hola ${nombre} ¿tu apellido es ${apellido}?`) ;

// Caracteres especiales: \n -> Salto de línea
let ejemplo = "una linea \n otra linea" ;
console.log(ejemplo) ;

// Ejemplos:

let str1 = "esta cadena \
se verá \
en una sola \
línea."
console.log(str1) ;

let str2 = "esta cadena \n\
se verá \n\
en varias \n\
líneas"
console.log(str2) ;

let carpetaDestino = "c:\\temporal\\trabajos\\" ;
console.log(carpetaDestino) ;

let amigo = "Genaro \"Bolincho\" Nuñez" ;
console.log(amigo) ;

let cadenaEspecial = "abcdefghijklnopqrstuvwxyz" ;
console.log(cadenaEspecial[0]) ;
console.log(cadenaEspecial[1]) ;
console.log(cadenaEspecial[2]) ;
console.log(cadenaEspecial[15]) ;
console.log(cadenaEspecial.toUpperCase()) ;                                 // Método que devuelve la cadena en Mayúsculas
console.log(cadenaEspecial[0].toUpperCase()) ;                              // Mayúsculas del primer elemento (A)
console.log(cadenaEspecial[cadenaEspecial.length-1].toUpperCase()) ;        // Mayúsculas del último elemento (Z)








