var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

console.log("\n\n\n");



// A function that returns a letter grade

console.log(chalk.yellow("A function that returns a letter grade from a number. "));
function letterGrade(g){
  g = parseInt(g);

  if (g < 60 && g >= 0){
     return ('F');
  }else if(g < 70){
    return ('D');
  }else if(g < 80){
    return ('C');
  }else if(g < 90){
    return ('B');
  }else if(g <= 100){
    return ('A');
  }else{
    return ("Not a valid grade.");
  }

} // End letterGrad function

var grade = letterGrade(80);
console.log(grade);
grade = letterGrade(90);
console.log(grade);
grade = letterGrade(88);
console.log(grade);
grade = letterGrade(75);
console.log(grade);
grade = letterGrade(69);
console.log(grade);
grade = letterGrade(55);
console.log(grade);
grade = letterGrade(100);
console.log(grade);
grade = letterGrade(105);
console.log(grade);
grade = letterGrade(grade);
console.log(grade);


console.log("\n\n\n");



// Add Tax function-

console.log(chalk.magenta("A function that returns the total plus tax."));
function addTax(sales, tax){
  sales = parseFloat(sales);
  tax = parseFloat(tax);
  return sales += tax/100 * sales;
}

var total = addTax(100,10);
console.log("Your total is: $",total);
total = addTax(120,9.25);
console.log("Your total is: $",total);
total = addTax(1000,6);
console.log("Your total is: $",total);
total = addTax(10,8.5);
console.log("Your total is: $",total);
total = addTax(560,7);
console.log("Your total is: $",total);

console.log("\n\n\n");



// Function that adds the values in an array

console.log(chalk.green("Arrays in functions."));

function sum(y){
  var total = 0
  for(var k = 0; k < y.length; k++){
    total += y[k];
  }
  return total;
}

var total = sum([3,4,5]);

console.log("Total of array items: ",total);

console.log("\n\n\n");



// Function that returns the value for a factorial function

console.log(chalk.cyan("Factorial function"));

function factorial(f){
  var total = 1
    for(var i = 2; i <= f; i++){
      total *= i;
    }
    
    return total;
  }

var x = factorial(0);
console.log(x);
x = factorial(1);
console.log(x);
x = factorial(2);
console.log(x);
x = factorial(3);
console.log(x);
x = factorial(6);
console.log(x);
x = factorial(17);
console.log(x);

console.log("\n\n\n");



// Random numbers: Math.random()

console.log(chalk.yellow("Random numbers"));

function rollDie(){
  return Math.floor(Math.random() * 6) + 1;
}

var roll

for(var i = 0; i <25; i++){
  num = rollDie();
  console.log("roll: ", num);
}

console.log("\n\n\n");

//comparing random results

console.log(chalk.magenta("Is it a double roll?"));

function isPair(roll1,roll2){
  return roll1 === roll2;
}

var x = isPair(3,4);
console.log(x);

console.log("\n\n\n");



// How many pairs in 10,000 dice rolls?

console.log(chalk.magenta("How many pairs in 10,000 rolls?"));

function countPairs(num){
  var count = 0;
  for(var i = 0; i <= num; i++){
    if(isPair(rollDie(), rollDie())){
    count++;
    }
  }
  return count;
}

var pairs = countPairs(10000);
console.log("The number of pairs is",pairs);

console.log("\n\n\n");
