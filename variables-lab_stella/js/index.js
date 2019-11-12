/*
TODO:
- Output to the document
- Javascript resources
- Different ways to declare variables
  - Store a reference
- Other properties
- If there's time: The difference between string quotes
- If there's time: functions
*/
alert('hello');

// + - * / ** % =
// += -= *= /=

// variables: var, let, const
let numItemsInCart = 0; // let can change
let nameOfUser = `George Brown`; // const will not change


numItemsInCart += 1; // Add 1
numItemsInCart += 1; // Add 1
numItemsInCart += 1; // Add 1

document.getElementById(`cartItems`).innerHTML = numItemsInCart;

// Search the document
// Find the element with id="theHeading"
// Check the innerHTML
document.getElementById(`theHeading`).innerHTML = `Hello, <small class="highlight">${nameOfUser}</small>`;


//EXERCISE: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = `Clown`;
let geoLocation = `Clowntown`;
let mySalary = 300000;
let companyName = `GB Circus`;

document.getElementById(`labOutput`).innerHTML += `<li>You will be a ${jobTitle} in ${geoLocation}, making $${mySalary} for ${companyName}.</li>`;


//EXERCISE: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

var currentYear = 2019;
var birthYear = 1900;

console.log(`They are ${currentYear - birthYear} years old.`)

document.getElementById(`labOutput`).innerHTML += `<li>They are ${currentYear - birthYear} years old.</li>`;


