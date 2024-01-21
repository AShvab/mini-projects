// class CityPerson{
//   printCity(){
//     console.log(this.city);
//   }
// }

// class Person extends CityPerson{
//   name = "Anna";

//   constructor() {
//     super();
//     this.city = "Kyiv";
//   }

//   greet() {
//     console.log("Hi, I am " + this.name + " and I am from " + this.city);
//   }
// }

function Person() {
  this.name = "Anna";
  this.city = "Kyiv";
  this.greet = function () {
    console.log("Hi, I am " + this.name + " and I am from " + this.city);
  };
}

Person.describe = function () {
  console.log('Creating person')
}

// Person.prototype = {
//   printCity() {
//     console.log(this.city);
//   },
// };
Person.prototype.printCity = function () {
  console.log(this.city);
}

console.dir(Person)

const person = new Person();
person.greet();
person.printCity();
// console.log(person.__proto__);
console.log(person);
console.log(person.toString())
const person2 = new person.__proto__.constructor();
console.log(person.__proto__ === Person.prototype);

// const userA = new User();
// userA.__proto__ === User.prototype; // true
// userA.__proto__ === User.__proto__ // false