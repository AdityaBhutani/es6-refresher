//// ========= CONST AND LET ============

// CONST
const firstName = "Aditya";
// firstName = "Adi"; //Wont assign an drop an error
console.log(firstName);
const person = {
  name: "Adi",
  gender: "Male"
};

//Wont allow as reassigning is not allowed for const
// person = {
//   name: "Aditya",
//   gender: "Male"
// };

//Allowed as modification is allowed for const
person.name = "ADITYA";

console.log(person);

const num = ["Male", "Female", "Beech-ka"];
//Allowed as modification is allowed for const
num[0] = "MALE";
num.push("LGBT");

//Not allowed as reassigning is not allowed for const
// num = ["MALE", "FEMALE", "BEECH_KA"];
console.log(num);

//LET
let secondName = "bhutani";
secondName = "Bhutani";
console.log(secondName);

//==============================================

//// ========= ARROW FUNCTIONS ============

// REGULAR FUNCTION
function sayHello() {
  console.log("SAYIN' HELLO");
}
sayHello();

// ARROW FUNCTIONS

const sayHello2 = () => {
  console.log("SAYIN' HELLO ~> 2");
};

sayHello2();

// when we have single lined function we can define it as
const sayHello3 = () => console.log("SAYIN' HELLO ~> 3");
sayHello3();

// when we have single parameter then function can be defined w/o paranthesis around parameter
const sayHello4 = name => console.log("SAYIN' HELLO ~> 4 " + name);
sayHello4("Adi");

//instead of having to concatenate parameters we use back ticks(``) and wrap param as ${param}
const sayHello5 = name => console.log(`SAYING HELLO ~> 5 ${name}`);
sayHello5("Aditya");

//==============================================

//// ========= FOREACH ============
// FOREACH executes a provided function once for each array element
const fruits = ["Apples", "Mangos", "Pineapples"];

// forEach w/ regular function
fruits.forEach(function(fruit) {
  console.log(`foreach ${fruit}`);
});

// forEach w/ arrow function, can also put index(not-mandatory)
fruits.forEach((fruit, index) => {
  console.log(`forEach w/ arrow ${fruit} ${index}`);
});

//// ========= MAP ============
// MAP creates a new array with the results of the provided function

const singleFruit = fruits.map(fruit => fruit.slice(0, -1));
console.log(singleFruit);

//// ========= FILTER ============
// Filter creates a new array returns array with things filtered out

const people = [
  { id: 1, name: "Adi" },
  { id: 2, name: "Anu" },
  { id: 3, name: "Niti" }
];

const peopleFiltered = people.filter(person => person.id !== 2);
console.log(peopleFiltered);

//// ========= SPREAD ============
// It Helps us to spread values out
// It helps us to expand iterables(array, strings etc)
const arr1 = [1, 2, 3];
const arr1Spread = [...arr1, 4];

console.log(arr1Spread);

// Combination of spread and filter
const arr1SpreadFilter = [...arr1.filter(num => num !== 2)];
console.log(arr1SpreadFilter);

const Person = {
  name: "Aditya",
  gender: "Male"
};

const Person2 = {
  ...Person,
  age: 24
};

console.log(Person2);

//// ========= DESTRUCTURING ============
// We can pull values out of objects arrays etc

const profile = {
  name: "Kavi Bhayana",
  address: {
    street: "40 main street",
    city: "Boston"
  },
  hobbies: ["movies", "music"]
};

const { address, hobbies } = profile;

const { street, city } = profile.address;

console.log(address, hobbies);

console.log(street, city);

//// ========= CLASSES ============
class Man {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greet = () => `Hello, ${this.name}`;
}

const man1 = new Man("Adi", 24);
const man2 = new Man("Any Man", 1000);

console.log(man2.greet());

//// ========= SUBCLASSES ============
class Customer extends Man {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  owes = () => `${this.name} owes ${this.balance}`;
}

const customer1 = new Customer("CUST1", 80, 240);

console.log(customer1.owes());
console.log(customer1.greet());

//// ========= MODULES ============
// Lets pretend we have 2 files:

// file 1(file1.js)
// export const name = "Karan";
// export const arrfile1 = [1, 2, 3, 4, 5];
// class File1Person(){
//   ......
// }
// export default File1Person
// // file 2(file2.js)
// import { name, arrfile1 } from "./file1";
// import File1Person from './file1'; // w/o curly braces
// // console.log(name, arrfile1); will return "KARAN"
