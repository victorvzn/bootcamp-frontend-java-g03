console.log('¡Hola Javascript!')

// Esto es un comentario en un línea

/*
  Esto
  es
  un
  comentario
  de múltiples
  líneas
*/

// TIPOS DE DATOS

// PRIMITIVOS: Number, String, Boolean (true, false), undefined, null, BigInt

// NUMBER
const numero1 = 20 // number
const numero2 = 20.50 // number
const numero3 = -36 // number

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// STRING O cadena de texto

const alumna = 'Marisol'
const alumno = "Marco"
const numero4 = "200"
const numero5 = 200

console.log(alumna, typeof alumna)
console.log(alumno, typeof alumna)
console.log(numero4, typeof numero4)
console.log(numero5, typeof numero5)

// BOOLEAN -> false o true

const tieneDescuento = false

console.log(tieneDescuento, typeof tieneDescuento)

// UNDEFINED

let nombre

console.log(nombre, typeof nombre)

// NULL

let apellido = null

console.log(apellido, typeof apellido) // 👀

// Tipos de datos adicionales: Object, Function, BigInt, Symbol

// VARIABLES Y CONSTANTES

//  ECMASCRIPT 5 === ES5 --> VAR
//  ECMASCRIPT 6 === ES6 --> CONST, LET

// CONST -> ES6 (El uso de const es lo recomendado)

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 16

// edad = 33 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)

// LET -> ES6 (El uso de let es lo recomendado)

let edad2 // No es obligatorio inicializarlo

edad2 = "36"
edad2 = true
edad2 = 22

console.log(edad2, typeof edad2)
