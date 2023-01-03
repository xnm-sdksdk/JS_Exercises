// Nuno Mendonça


// Exercise 19

/*
Create a function to return the multiplication table of any number.
If the number is not passed, the function should return the multiplication table of 1.
*/


function multiplicationTable(num = 1) {
    let table = '';

    for (let i = 0; i < num; i++) {
        table += `${num} x ${i + 1} = ${num * (i + 1)}\n`;
    }
    alert(table);

}


const num = +prompt("Insert a number: ")
multiplicationTable(num);

// Exercise 19 - Done.