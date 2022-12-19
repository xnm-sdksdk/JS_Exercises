
/*
- (a): Replace the nickname age and hometown por other data, John Doe, 30 and London

- (b): Iterate over each li and change the class of these elements to "listitem", 
add styles to change the color of these items to reds

- (c): Create a new element (img) using JS, configure the attribute src to the image
http://placekitten.com/200/300


----- Set Attribute method sets a new value to an attribute
if the attribute does not exist it is created first
*/

// a
// get the elements by ID using the DOM
let name = document.getElementById("nickname").innerHTML = "Jonh Doe";
let age = document.getElementById("age").innerHTML = "30";
let home = document.getElementById("hometown").innerHTML = "London"


// b

// get the elements by tag name using the DOM
let list = document.getElementsByTagName("li");
// iterate over each element length recalling the var above
for (let i = 0; i < list.length; i++) {
    // add class name with the name listitem
    list.className = "listitem";
    // add style to change the color of the elements to red
    list[i].style.color = "red";
}


// c
// create an element using the DOM
let img = document.createElement("img");
// add attribute to the element by referring the src and the file
img.setAttribute("src", "http://placekitten.com/200/300");
// append to the body of the document
document.body.appendChild(img);


// Ex 12 Done