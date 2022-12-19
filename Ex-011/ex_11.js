

/*
After pressing the button display on the console the values from the form

*/

// variable to get the form by ID
let form1 = document.getElementById("form1");


// add an event listener on submit, start an event 
form1.addEventListener("submit", (e) => {
    // call the function to get the values
    getValues(e);
});


// function to get the values from the form
function getValues(e) {
    // loop through the form elements
    for (let i = 0; i < form1.length; i++) {
        // check if the value is not equal to submit
        if (form1.elements[i].value != "Submit") {
            // display the value on the console
            console.log(form1.elements[i].value);
        }  
    }

    // prevent form from happening if the button is not clicked on submit
    e.preventDefault();
}


// Ex 11 Done