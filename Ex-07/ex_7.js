


/*
Function called mixUp, it should take to arguments and,
return the concatenation of both.
We have to switch the first two characters of the strings
*/


let mixUp = (firstString, secondString) => {
    // slice method extracts a part of a string and returns the extracted part in the new string
    // so we get from the beginning of the string to the 2 character, and we switch by the second character in the other string
    return secondString.slice(0,2) + firstString.slice(2) + " " + firstString.slice(0,2) + secondString.slice(2);
}

console.log(mixUp("mix", "pod"))
console.log(mixUp("dog", "dinner"))


// Ex 7 Done