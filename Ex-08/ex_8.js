

// to count the number of words
let countWords = (words) => {
    // iterate over the length of the words argument
    let totalWords = words.length;
    // output
    console.log("Total words: " + totalWords);
    
    // to count the number o characters
    // initialize the variable at 0
    let totalChars = 0
    // iterate with a loop over the words argument
    for (let i in words) {
        // recall of the variable and increment and add every item in the variable words throughout the length
        totalChars += words[i].length;
    }
    // output for the characters
    console.log("Total characters: " + totalChars);

    // average calculations
    let average = totalChars / totalWords
    // output for the average
    console.log("Average: " + average);
}

// defining the array with the params 
let sportsArray = ['Jogging', 'Running', 'Swimming'];
// display the array
console.log(sportsArray);
// make the param in the function the sportsArray
countWords(sportsArray);

// Ex 8 Done