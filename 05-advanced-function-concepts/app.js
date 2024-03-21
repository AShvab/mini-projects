// pure functions:
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 5));
console.log(add(10, 50));

// impure function:
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
console.log(addMoreNumbers(1, 5));

const hobbies = ["sports", "cooking"];
function printHobbies(h) {
  h.push("new hobby");
  console.log(h);
}
printHobbies(hobbies);

// factory functions:

let multiplier = 1.1;
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// function calculateTaxCalculator will take latest multiplier,because it is global
multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = "Anna";
function greetUser() {
  let name = "Max";
  console.log("Hi " + name);
}
let name = "Maximilian";
userName = "John";
greetUser();

// recursion
// function powerOf(value, power) {
//   let result = 1

//   for(let i = 0; i < power; i++) {
// result *= value
//   }
//   return result
// }

// console.log(powerOf(2, 3)); // 2*2*2

function powerOf(x, n) {
  // if(n===1){
  //   return x
  // }
  // return x * powerOf(x, n - 1);
  return n===1 ? x : powerOf(x, n - 1);
}
console.log(powerOf(2, 3));

const myself ={
  name: "Anna",
  friends:[
    {
      name: "Manuel",
      friends:[
        {
          name:"John",
        }
      ]
    },
    {
      name: "Julia",
      
    }
  ]
}
