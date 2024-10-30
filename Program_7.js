const prompt = require('prompt-sync')() // Code in order to run the prompt function

let age = prompt("Enter your age : ") // 'prompt' function is used to take input from the user
console.log(typeof age) // Default datatype after taking input from user is always string 
age = Number.parseInt(age) // Converting string to Number type
console.log(typeof age)

// Conditional Expressions
if (age<5)
{
    alert("You are a kid!")
}
else if(age>5 && age<18)
{
    alert("You are an a teenager!")
}
else 
{
    alert("You are an adult!")
}
// 'alert' function is used to display a pop up window on a browser

console.log("You can ",(age>18? "drive" : "Not drive"))

// Switch Case Example 