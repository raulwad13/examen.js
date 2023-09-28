// Ejercicio 1- Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase
function contarLetras (arrayPalabras, letras) {
    let contar = 0;

    for (let i = 0; i < arrayPalabras.length; i++) {
        const palabras = arrayPalabras[i];

        for (let j = 0; j < palabras.length; j++) {
            if (palabras[j] == letras)
            contar++;
        }
    }
    return contar;
}
const frase = ["La vida es mejor si se toma con una tza de cafe primero","pez","losa"];
const letras = "e";

const resolucion = contarLetras(frase,letras);
console.log("La letra" + letras + "aparece" + resolucion + "veces en el texto")
// He seguido la misma lógica que cuando hicimos ejercicios parecidos, me pide contar las letras de un texto entonces sé que tengo que recorrer los array e imprimir las veces que aparezca un elemento en este caso la "e".


// Ejercicio 2- Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números
let numerosImpares = []
function sacarImpares() {

    const numero = parseInt(prompt("Ingresa numero"));

    for(i=num; i < num +50;i++){
        if(i%2 !== 0){
            sacarImpares.push(i);
        }
    }
    return sacarImpares;
}
console.log(i < numero)

// Entiendo que tengo que realizar una cuenta, he colocado un prompt para seleccionar el numero y desde ahí contar los siguientes 50, no me está resultando despues de probar varias cosas aunque entiendo la idea.