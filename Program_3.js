var x = 10
var x = 12 // Doesn't throw any error since redeclaration of 'var' is allowed

let y = "Onkar"
// let y = "Yogi" // Throws an error since redeclaration of 'let' is not allowed

const z = "Kaushal" // Needs to be assigned while declaration or else throws error
// z = "Yash" // Throws an error

// Defining a scope block
{
    var x = "Ishaan" // The same variable is overwritten 
    console.log(x)
    let y = "Shreyas" // A different local variable is created
    console.log(y)
}

console.log(x)
console.log(y)

/* 'var' : This keyword should not be used as it could create a lot of bugs in our program . Using this
   keyword , all the variables become global irrespective of the scope definition .

   'let' : This keyword use is recommended and behaves like any other normal variable .

   'const' : This keyword creates such constants that cannot be reassigned or redeclared . The use of this
   keyword is highly appreciated .
  */ 