// this ==> reference in side Class
// javascript objects

// own object ==> global object ==> "window"

// window.alert("hello");

// function keyword function this always be window

let text = "Hello world";

function print() {
  function printOne() {
    console.log(this);
  }
  // function expression
  let sub = function () {
    console.log(this);
  };
  sub();
}

// this.print();

// oops
// class User {
//   print() {
//     let _this = this;
//     setTimeout(
//       function () {
//         console.log(this);
//         // bind's a window object only
//       }.bind(_this),
//       2000
//     ); // function call 1s === 1000ms
//     // create a function in a parameter of function call ==> callback function
//   }
// }
// User | Window
// let user = new User();
// user.print();

// arrow function (=>) don't have its own this instance
// bind , call ,apply ==> to set a new instance to function keyword function

// ES5 (2009) oops  and ES6 (2015) oops

// ES5 ==> constructor function ==> oop concept
// ES6 ==> Class

// User
//  create;
//  updating;
//  deleting;

// User => student , admin , clerk ==> Object
// object uses all methods and props of a class

// class like logic

function User() {}

// inheritance ==> access a parent property (protected & public)

User.prototype.name = "deepakkumar";
User.prototype.print = function () {
  console.log(this.name);
};

function Child() {}

// es5 inheritance
Child.prototype = Object.create(User.prototype);

// es6 inheritance
// class Child extends User

let user = new Child();
user.print();

// to achieve inheritance
// add more methods & property for a class / constructor function
