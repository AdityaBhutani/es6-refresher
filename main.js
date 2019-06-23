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
// Filter creates a new array

const people = [
  { id: 1, name: "Adi" },
  { id: 2, name: "Anu" },
  { id: 3, name: "Niti" }
];
