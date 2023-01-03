// Nuno Mendonça


// Exercise 18 - b)


/*
If the number 1 which is prime can not be divided by any other number, but himself.

- Write a cycle to generate prime number between 2 and n.

- For n =10, the result should be: 2,3,5,7.

- Note: The code must work for any number. It should not be adjusted to any fixed number.

*/


const number = 10
let check;

for (let i = 2; i <= number; i++) {
    check = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            check = false;
            break;
        }
    }

    if (check) {
        alert(i);
    }

}

// Exercise 18 - b) - Done.