'use strict';

// primitive data types

// number
const age = 30;
const pi = 3.14159;

// console.log(typeof pi);

// string
const name = 'Alice';
const greeting = 'Hello, World!';
const userName = 'John';
const templateGreeting = `Hello, ${userName}!`;

// console.log(typeof templateGreeting);

// boolean
const isStudent = true;
const hasGraduated = false;

// console.log(typeof hasGraduated);

// undefined
let x;
// console.log(x);
// console.log(typeof x);

// null
const y = null;
// console.log(y);
// console.log(typeof y);

// non-primitive data types

// object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
};

// console.log(person.firstName, person.lastName, person.age);

const targetKey = 'firstName';

console.log(person.firstName);
console.log(person[targetKey]);

// array
const colors = ['red', 'green', 'blue', 100, true];
// console.log(colors[4]);

// function
const greet = function (name) {
  return `Hello, ${name}`;
};

// console.log(typeof greet);

const colors2 = ['red', 'green', 'blue', ['white', 'black']];
console.log(colors2[3][0]);

// object dipakai untuk sebuah entitas
const animal = {
  type: 'cat',
  age: 5,
  sound: 'meow',
};
