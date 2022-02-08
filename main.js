let num = "4"
console.log(parseInt(num))

//bonus
let num = "5.6"
console.log(parseFloat(num).toFixed(1))

let example = 15
String(example)
console.log(String(example))

let example = "hello"
console.log(example.toUpperCase())

//capitalise first letter
let example = "hello"
const index = 0
console.log(`${example.charAt(index).toUpperCase()}` + `${example.slice(1)}`)

//remove 2nd letter - use charAt() not ([])
let example = "hello"
const index = 1
console.log(`${example.charAt(index)}`)

let firstName = "Adam"
let lastName = "Rafferty"

let fullName = firstName + " " + lastName
console.log(fullName)

//bonus
let fullName = prompt(firstName)+" "+prompt(lastName)
console.log(fullName)

let example = 16
console.log(example*example)
//bonus
console.log(Math.cbrt(example))

let example = 25
console.log(Math.sqrt(example))