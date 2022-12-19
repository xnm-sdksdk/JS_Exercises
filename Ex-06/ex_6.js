
/*
Create a function called celsiusToFahrenheit
store a temperature in a variable in celsius unit
convert the value to fahrenheit and output the result to the console in the following format: "XYºF it's YXºC"

Do the reverse for the conversion from fahrenheit to celsius
*/

// formula: c to f multiply 9, divide it by 5 and add 32

// formula: f to c subtract 32 multiply by 5 divide by 9


// Both functions passed with params
let celsiusToFahrenheit = (celsius) => {
    let calculate = ((celsius * 9) / 5) + 32
    console.log(celsius + "ºC" + " it's " + calculate + "ºF");
}


let fahrenheitToCelsius = (fahrenheit) => {
    let fcalculate = ((fahrenheit - 32) * 5) / 9
    console.log(fahrenheit + "ºF" + " it's " + fcalculate + "ºC");
}


celsiusToFahrenheit(20);
fahrenheitToCelsius(20);


// Ex 6 Done.