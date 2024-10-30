// Primitive datatypes in JS

let a = 12 // Integer datatype
let b = null // null datatype
let c = true // boolean datatype
let d = BigInt("6732") // BigInt datatype
let e = "Onkar" // string datatype
let f = Symbol("I am a symbol") // Symbol datatype
let g = undefined // JS variables are by default 'undefined' 

console.log(a,b,c,d,e,f,g)
console.log(typeof d) // 'typeof' keyword is used to get the datatype of variable

const obj = {
    45:145,
    "Shreyas":24545,
    "Ishaan":78327
}

console.log(obj[45]) // Values can be accessed using the '[]' operator

// Objects in JS are like dictionaries which have a pair of keys and values 