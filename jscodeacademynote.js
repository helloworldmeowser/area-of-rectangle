// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;

// Function Declaration
function greetWorld() {
  console.log('Hello world!');
}
function getReminder() {
  console.log('Water the plants.');
}
function greetInSpanish() {
  console.log('Buenas tardes.');
}
// Calling a Function
function getGreeting() {
  console.log("Hello, World!");
}
getGreeting();
// Code after function call

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks ('Cole');
// Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
// Return
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined
//we have a plant that we need to water once a week on Wednesdays. 
const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
//This is the same, but => is an Arrow Function
const plantNeedsWater = (day) => {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
//Body Arrow Function Example
//Zero Parameters Example
const functionName = () => {};
//One Parameters Example
const functinoName = paramOne => {};
//Two or More Parameters
const functinoName = (paramOne, paramTwo) => {};
//Let’s refactor plantNeedsWater() to be a concise body. 
//Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
