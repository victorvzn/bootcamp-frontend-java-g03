console.log('Hola JS')

// Tipos de datos primitivos

const numero = 339 // number
const cadena = 'Victor' // string
const esMayor = true // boolean
let undefinedValue // undefined
const soyNulo = null // null

// ARRAYS

// Un arreglo tiene elementos de cualquier tipo de dato: cadena, números, boolean, null, arrays, objetos, etc...

const arregloVacio = [] // Arreglo vacío
const listDeValores = [1, 2, 3, 'Victor', 'Villazón', true, [1, 2, 3], undefined, null]

console.log(arregloVacio)
console.log(listDeValores)

// Lectura de los elementos de un arreglo

console.log(listDeValores[0]) // 1
console.log(listDeValores[4]) // Villazón
console.log(listDeValores[5]) // true
console.log(listDeValores[100]) // undefined

// Escritura en un arrelo

listDeValores[2] = 99

console.log(listDeValores)

// Insertar nuevos elementos en un arreglo (modifica el arreglo original)

listDeValores.push('javascript')

console.log(listDeValores)

// Remover elementos del final del arreglo (modifica el arreglo original)
listDeValores.pop()

console.log(listDeValores)

// Eliminar un elemento (modifica el arreglo original)

listDeValores.splice(4, 1)

console.log(listDeValores)

// Obtener el tamaño del arreglo

console.log(listDeValores.length) // 8
console.log('bienvenido'.length)

// MÉTODOS DE ARREGLOS

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y devuelve un boolean (true o false)

const languages = ['javascript', 'java', 'php', 'python', 'C', 'c++', 'python']

console.log(languages.includes('java')) // true
console.log(languages.includes('cobol')) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const resultado = languages.filter(
  function (language) {
    // return language === 'java'
    // return language.includes('c') // ['javascript', 'c++']
    return language.toLowerCase().includes('c') // ['javascript', 'C', 'c++']
  }
)

console.log(resultado)
console.log(languages)