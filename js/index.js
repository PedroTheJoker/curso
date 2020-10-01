// console.log('Hola mundo!');

// Tipos de datos en JavaScript
// String, Boolean, Number, los objects es un tipo de dato el cual te permite almacenar cualquier otro tipo de dato de JavaScript

// var, let, const
// var miPrimeraVariable = 'Lala'; definir variables de esta forma es desaconsejable

let miPrimeraVariable = "Mi primera variable";
// console.log(miPrimeraVariable);

//propiedad de mutabilidad: reasignar el valor de las variables
miPrimeraVariable = "Esto ha cambiado";
// console.log(miPrimeraVariable);

// Booleans
let miBoolean = true;
let miOtroBool = false;

// Numbers
let miNumero = 0;
let miNumero2 = 2;
let miNumero3 = -12;
// console.log(miNumero, miNumero2, miBoolean, miOtroBool);

let undef;
// console.log(undef);

let nulo = null;
// console.log(nulo);

// Objetos

// Objeto vacio
const miObjetoVacio = {};

const miObjeto = {
  edad: 20,
  nombre: "Pepe",
  mas18: false,
};

// console.log(miObjeto);

//Arrays

const arrayVacio = [];
const arr = [1, 2, 3, "hola", miObjeto]; //los arrays en javascript pueden almacenar datos de diferentes tipos

// console.log(arrayVacio, arr);

arr.push(5); //incluye los elementos que le pasemos como argumento al array

// console.log(arr);

//control de flujo

if (miObjeto.mas18) {
  // console.log('Hola, puedes pasar');
} else {
  // console.log('No puedes pasar');
}

let num = 20;
while (num <= 10) {
  // console.log(num);
  num++;
}

/* let num2=1;
switch (num2) {
    case 1:
        console.log('caso 1');
        break;
    
    case 2:
        console.log('caso 2');
        break;

    default:
        console.log('nel del panel');
        break;
} */

/* const numeros = [1, 2, "hola", 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
} */

function iterar(arg1) {
  for (let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i]);
  }
}

const numeros = [1, 2, "hola", 4, 5];

const nombres = ["Pepe", "Paco", "Felipe", "Jaime", "tomas"];
iterar(numeros);
iterar(nombres);

function suma(a, b) {
  return a + b;
}

const resultadoSuma = suma(1, 2);
// console.log(resultadoSuma);

function sumar(a, b, cb) {
  const res = a + b;
  cb(res);
}

function callback(result) {
  console.log("resultado", result);
}
sumar(2, 3, callback);

// Fat arrow function

const miFat = (a, b) => a + b;

const r = miFat(1, 5);

// console.log(r);

const otraFAF = (a, b) => {
  return a + b;
};

const res = otraFAF(1, 2);

// console.log(res);

// funcion anonima
sumar(1, 2, (res) => {
  console.log("Esto es una funcion anonima, el resultado de la suma es: ", res);
});
