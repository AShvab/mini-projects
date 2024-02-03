class CityPerson {
  printCity() {
    console.log(this.city);
  }
}

class Person {
  name = "Anna";

  constructor() {
    // super();
    this.city = "Kyiv";
  }

  greet = () => {
    console.log("Hi, I am " + this.name + " and I am from " + this.city);
  };
  // greet() {
  //   console.log("Hi, I am " + this.name + " and I am from " + this.city);
  // }
}

// function Person() {
//   this.name = "Anna";
//   this.city = "Kyiv";
// }

// Person.prototype.greet = function () {
//   console.log("Hi, I am " + this.name + " and I am from " + this.city);
// };

// Person.describe = function () {
//   console.log("Creating person");
// };

// Person.prototype = {
//   printCity() {
//     console.log(this.city);
//   },
// };
// Person.prototype.printCity = function () {
//   console.log(this.city);
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printCity();
// console.log(person.__proto__);
// console.log(person);
// console.log(person.toString());
// const person2 = new person.__proto__.constructor();
// console.log(person.__proto__ === Person.prototype);

// const userA = new User();
// userA.__proto__ === User.prototype; // true
// userA.__proto__ === User.__proto__ // false

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById("btn");
// button.addEventListener("click", p.greet.bind(p));

const course = {
  // new Object();
  title: "JavaScript",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Someone",
      writable: true,
    },
  }
);

// student.name = "Someone";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress()

console.log(student);
course.printRating();
