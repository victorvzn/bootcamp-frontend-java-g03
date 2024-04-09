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

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Residuo
console.log(2 ** 3) // Dos elevado al cubo
console.log(Math.pow(2, 3)) // Hace lo mismo que 2 ** 3

// OPERADORES DE ASIGNACIÓN

const genero = 'femenino'

console.log(genero)

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desigualdad no estricta (==)
// Devuelve un valor booleano (true o false)
// Este oprador no toma en cuenta el tipo de datos al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 != 1) // false

// Operador de igualdad y desigualdad estricta (===) (✅ ES RECOMENDABLE USARLO CASI SIEMPRE)
// Devuelve un valor booleano (true o false)
// Este operador si toma en cuenta el tipo de dato y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false
console.log(1 !== 1) // false

// OPERADORES DE COMPARACIÓN, siempre devuelven un boolean

console.log(8 > 5) // true
console.log(5 < 1) // false
console.log(8 >= 5) // true
console.log(8 <= 5) // false

// OPERADORES LÓGICOS (and, or, negación)

console.log(true && false) // AND
console.log(true || false) // OR
console.log(!false) // NEGACIÓN

// Operador de cadena (concatenación)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' ' + 'Villazón'
const miEdad = 37

const saludoAmigo = saludo + nombreCompleto + ". Tengo " + miEdad + ' años'

console.log(nombreCompleto)
console.log(saludoAmigo)

// EJERCICIOS (TODO)

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false

const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length)

// 2. Retornar true si un numero es menor que 40 sino devolver false
// 3. Retornar True si un numero es menor que 60 sino devolver False
// 4. Retornar True si un numero es par sino devolver False
// 5. Retornar True si un numero es impar sino devolver False
// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla: SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%