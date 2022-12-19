// Nuno Mendonça

/*
create a function called calculateDogAge
take 1 argument, the age of a dog
calculate the age of your dog converting one human year to 7 dog years
output the result in the console like this: "Your dog is XX year old in dog years"
call the function 3 times with 3 different values in it
*/


// using arrow function with param we are going to fill in later in the call back function
let calculateDogAge = (age) => {
    let dogAge = 7 * age;
    console.log("Your dog is " + dogAge + " year old in dog years");
}

calculateDogAge(7);
calculateDogAge(14);
calculateDogAge(21);

// Ex 5 Done.