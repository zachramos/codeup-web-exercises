"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

//
// function enterNumber(number){
//     confirm("would you like to enter a number?");
//      number = prompt("Please enter a number...");
//
//     if(number % 2 === 0){
//         alert("this number is even");
//     } else {
//         alert("this number is odd");
//     }
//
//     alert((number) + " plus 100 is: " + (parseInt(number) + 100));
//
//     if(number > 0){
//         alert("this number is positive");
//     } else {
//         alert("this number is negative.");
//     }
//
//     return "thank you for participating!";
// }
//
// enterNumber();
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(anyColorString) {
//     anyColorString = prompt("please enter a color here...");
//     switch (anyColorString){
//         case("red"):
//             return "Strawberries are red"
//             break;
//         case("orange"):
//             return "Orange is my favorite color!"
//             break;
//         case("yellow"):
//             return "bananas are yellow"
//             break;
//         case("green"):
//             return "grass is always greener"
//             break;
//         case("blue"):
//             return "the sky is blue");
//             break;
//         case("indigo"):
//             return "there is a pokemon indigo league"
//             break;
//         case("violet"):
//             return "are violets really violet?"
//             break;
//         default:
//             return "I have never heard of that color"
//             break;
//     }
// }

// analyzeColor();



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var luckyNumber = Math.floor(Math.random()* 6)
// var pay = 60
// var total;
//
// switch (luckyNumber) {
//     case "1":
//         total = .9 * pay;
//         break;
//     case "2":
//         total = pay * .75;
//         break;
//     case "4":
//         total = pay * .5;
//         break;
//     case "5":
//         total = 0;
//         break;
//     default:
//         total = pay;
//         break;
// }
//
// console.log("your total pay is " + total);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);



/*bonuses
===============================================================
 */

// write a function (or multiple functions) that will return
// a boolean depending on if the string value passed to it
// as an argument is the name of a day of the week that starts with a T.
//     Otherwise, it should return false.

// Example: dayOfTheWeekStartsWithT("Monday")     => returns false
// Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
// Example: dayOfTheWeekStartsWithT("Tommy")     => returns false
function dayOfTheWeekStartsWithT(day) {
    day = prompt("What day starts with T?");
    switch (day){
        case "Monday":
            alert("false");
            break;
        case "Tuesday":
            alert("true");
            break;
        case "Wednesday":
            alert("false");
            break;
        case "Thursday":
            alert("true");
            break;
        case "Friday":
            alert("false");
            break;
        default:
            alert("false");
    }
}

console.log(dayOfTheWeekStartsWithT());

/*bonus 2
===============================================================================
 */
// Write a function, isValidPassword, that takes in a string argument and returns true or false
// depending on whether or not all the following conditions are true:
// 1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
// 2) Contains at least one letter and one number
// 3) Contains at least one upper and one lower case letter
// 4) Only comprised of letters and numbers
// 5) EXTRA BONUS: is not the same forwards and backwards


function isValidPassword(password) {


}

