// Operador Condicional Ternario

// Dependendo da condicao, recebemos valores diferentes

// Condição então valor1 se nao valor2
// condition ? value1 : value2

// Exemplos
// Café da manha top
let pao = true
let queijo = true
let presunto = true

const niceBreakfast = pao && queijo && presunto ? 'Cafe da manha top' : 'Cafe ruim'
console.log(niceBreakfast)

// Maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : 'can not drive'
console.log(canDrive)