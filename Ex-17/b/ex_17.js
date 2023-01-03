// Nuno Mendonça

// Exercise 17 - b)

/*
Using a conditional statement, via prompt ask the user for a number.
Next display by alert the following messages:

- 1 if number is greater then 0 

- -1 if number is less then 0

- 0 if number is equal to 0
*/

let number = prompt("Enter a number: ", 0);

if (number < 0) {
    alert("-1");
} else if (number > 0) {
    alert("1");
} else {
    alert("0");
}

// Exercise 17 - b) - Done.