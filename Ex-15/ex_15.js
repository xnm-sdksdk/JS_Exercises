// Nuno Mendonça


/*
for each operation create and event listener to the button to when clicked, 
collect the entry value and show the result of the operation int the div "solution"

the button "CE" (Clear Entry) should clear the div "solution"
*/


// function for the calculations

function squareNumber(num) {
    const square = num * num
    console.log(`The result of squaring the number ${num} is ${square}.`);
    return square;    
}


function halfNumber(num) {
    const half = num / 2
    console.log(`Half of ${num} is ${half}.`);
    return half;
}


function fractionNumber(num1, num2) {
    const fraction = (num1 * num2) / 100;
    console.log(`${num1} is ${fraction}% of ${num2}.`);
    return fraction;
}


function circleRadius(num) {
    const radius = Math.PI * squareNumber(num);
    console.log(`The area for a circle with radius ${num} is ${radius}.`);
    return radius;
}

// square button event listener
const squareButton = document.getElementById('square-button');
squareButton.addEventListener('click', function(e) {

    const num = document.getElementById('square-input').value;
    document.getElementById('solution').innerHTML = squareNumber(num);
    e.preventDefault();
});


// half button event listener
const halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', function(e) {
    const num = document.getElementById('half-input').value;
    document.getElementById('solution').innerHTML = halfNumber(num);
    e.preventDefault();
});


const fractionButton = document.getElementById('percent-button');
fractionButton.addEventListener('click', function(e) {
    const num1 = document.getElementById('percent1-input').value;
    const num2 = document.getElementById('percent2-input').value;
    document.getElementById('solution').innerHTML = fractionNumber(num1, num2);
    e.preventDefault();
});


const circleButton = document.getElementById('area-button');
circleButton.addEventListener('click', function(e) {
    const num = document.getElementById('area-input').value;
    document.getElementById('solution').innerHTML = circleRadius(num);
    e.preventDefault();
});


const clear = document.getElementById('clear-entry-button');
clear.addEventListener('click', function(e) {
    document.getElementById('solution').innerHTML = '';
    e.preventDefault();
});

const solution = document.getElementById('solution');



// Ex 15 Done 

