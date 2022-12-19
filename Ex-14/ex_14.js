// Nuno Mendonça


/*
- Add an event listener to the button to call the function outputText when clicked
- In the function, collect the values from the elements in the form and create a string
to concatenate the values and output them to the div 'output';
*/

// declaration of the function to get the values from the form
function outputText() {
    // get the elements by ID
    // div to insert the values
    const display = document.getElementById("output");
    // the tree input text
    const text01 = document.getElementById("text01").value;
    const text02 = document.getElementById("text02").value;
    const text03 = document.getElementById("text03").value;

    // the values concatenated using the backticks
    const output = `${text01} ${text02} ${text03}`;

    // insert the values in the div
    display.innerHTML = output;
}

// get the button by ID
const button = document.getElementById("output-button");
// add an event listener to the button to call the function outputText
button.addEventListener("click", outputText);


// Ex 14 Done
