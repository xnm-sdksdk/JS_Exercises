
/*
- Create an array to store the main colors
- For each color do the output of a string as "My #Nº choice is <color>"
- Change the output for "My Nº choice, My #Nº choice...."
*/


const color = ["red", "green", "blue", "yellow"];
for (let i = 0; i < color.length; i++) {
    let choice = i + 1;
    let sufix;


    if (choice === 1) {
        sufix = "st";
    } else if (choice === 2) {
        sufix = "nd";
    } else if (choice === 3) {
        sufix = "rd";
    } else {
        sufix = "th";
    }
    result = `My ${choice} ${sufix} choice is ${color[i]}`
    console.log(result);
}

// Ex 9 Done.