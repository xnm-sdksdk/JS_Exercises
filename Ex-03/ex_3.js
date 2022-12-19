// Nuno Mendonça


/*
define 3 vars, assign them, create a conditional structure to order them
*/

// vars
const x = 0;
const y = -1;
const z = 4;

// first condition breakdown




/*
Logic behind the algorithm:

if the 1st is greater than the 2nd and the 1st is greater than the 3rd
and if the 2nd is greater the 3rd
the result must be 1st 2nd 3rd
else the result is 1st 3rd 2nd
*/
if (x > y && x > z) { 
 if (y > z) {
    alert(x + "," + y + "," + z);
} else {
    alert(x + "," + z + "," + y);
}
}

else if (y > z && y > z) {
    if (x > z) {
        alert(y + "," + x + "," + z);
    } else {
        alert(y + "," + z + "," + x)
    }
}

else if (z > x && z > y) {
    if (x > y) {
        alert(z + "," + x + "," + y)
    } else {
        alert(z + "," + y + "," + x)
    }
}

// ex 3 Done.