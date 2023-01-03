// Nuno Mendonça


// Exercise 18 - a)

/*
Write a cycle to ask the user for a number greater then 100.
If the number is different from > 100, ask again.
The cycle must run until a number is greater then 100 is inserted,
or, the user inserts a blank value.
Assume that only numbers are inserted. No need to check for that.
*/

let number;

do {
    number = prompt('Insert a number greater then 100', '');
} while (number < 100 && number);

// Exercise 18 - a) - Done.