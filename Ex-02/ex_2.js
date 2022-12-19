// Nuno Mendonça

// Conditional Structures

/*
Receive two int's by prompt, and alert the greater one in the console
*/


// defining vars
let num1, num2

// defining prompts to receive two int numbers 
num1 = +prompt("Insert the first Number: ", "0")
num2 = +prompt("Insert the second Number: ", "0")

// Conditional Structure to check the two int's and return the greater one
// parseInt - parses the value as a string and returns the first int, pass it as decimal
if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The number " + num1 + " is greater then the " + num2 + ".");
} else if (parseInt(num1, 10) < parseInt(num2, 10)) {
    console.log("The number " + num2 + " is greater then the " + num1 + ".");
} else {
    console.log("The numbers " + num1 + " and " + num2 + " are equal.");
}

// Ex 2 Done.