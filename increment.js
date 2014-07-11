var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');


console.log("\n\n\n");

//  FUNCTIONS
//  increment a number

console.log(chalk.blue("Increment function"));
function increment(x){
  x++;
  return x;
}

var z = increment(3);
console.log(z);
z = increment(7);
console.log(z);
z = increment(9);
console.log(z);
z = increment(12);
console.log(z);

console.log("\n\n\n");



// square a number

console.log(chalk.red("Square function"));
function square(i){
  i *= i
  return i;
}

var j = square(4);
console.log(j);

j = square(5);
console.log(j);

console.log("\n\n\n");



// find the area of a room

console.log(chalk.magenta("Area function"));
function area(l,w){
  return  l * w;
}

var a = area(2,10);
console.log(a);
a = area(5,20);
console.log(a);
a = area(10,30);
console.log(a);
a = area(3,4);
console.log(a);

console.log("\n\n\n");



// find volume

console.log(chalk.green("Volume function"));
function volume(length,width,h){
  return area(length,width)*h;
}

var v = volume(2,3,9);
console.log(v);
v = volume(5,10,30);
console.log(v);
v = volume(100,200,5);
console.log(v);
v = volume(50,30,20);
console.log(v);

console.log("\n\n\n");



//Function Nesting- functions within functions
console.log(chalk.cyan("Function Nesting"));
z = area(square(increment(3) + increment(4)), square(2));
console.log(z);

console.log("\n\n\n");



//Functions that don't accept values or return values

console.log(chalk.yellow("No values passed, no values returned."));

sayHello();

function sayHello(){
  console.log("Hello!");
}

console.log("\n\n\n");



// Create a function called makeUpper- give lowercase string and
//   return uppercase string

console.log(chalk.magenta("Make a string into uppercase letters"));

function makeUpper(hello){
  return hello.toUpperCase();
}

var toUpper = makeUpper('hello');
console.log(toUpper);
toUpper = makeUpper('goodbye');
console.log(toUpper);

console.log("\n\n\n");



// Can someone drink?

console.log(chalk.red("Can you drink?"));

age = prompt("How old are you? ");
age = parseInt(age);

function canDrink(years){
  return years >=21
}

var answer = canDrink(age);
console.log(answer);

console.log("\n\n\n");



// End of document.
