// var, let and scope
// let x = 10;
// x = 20;
// console.log(x);

// global scope
var x = 2;

// local scope - block scope
{
  let y = 4;
  console.log("y inside block scope " + y);
}

// this will result in error b/c y is inside block scope
console.log("y outside block scope results the following error");
console.log(y);

// local scope - function scope
function myFunc() {
  const z = 5;
  console.log("z inside function scope " + z);
}

// this will result in error b/c z is inside function scope
console.log("y outside block scope results the following error");
console.log(z);

myFunc();
/*********************************************************************/

/*
Implied globals 
-> if you declare variable without var, js declares the variable globally 
*/
function foo() {
  x = 4;
  print();
}

function print() {
  console.log(x);
}

/*********************************************************************/

foo();

function a() {
  console.log(x); // consult Global for x and print 20 from Global
}
function b() {
  var x = 10;
  a(); // consult Global for a
}
var x = 20;
b();

function b() {
  function a() {
    console.log(x);
  }
  var x = 10;
  a();
}
var x = 20;
b();

function b() {
  function a() {
    console.log(x);
  }
  a();
}
var x = 20;
b();

function f() {
  var a = 1,
    b = 20,
    c;
  console.log(a + " " + b + " " + c);
  function g() {
    var b = 300,
      c = 4000;
    console.log(a + " " + b + " " + c);
    a = a + b + c;
    console.log(a + " " + b + " " + c);
  }
  console.log(a + " " + b + " " + c);
  g();
  console.log(a + " " + b + " " + c);
}
f();

var x = 10;
function main() {
  console.log("x1 is:" + x);
  x = 20;
  console.log("x2 is:" + x);
  if (x > 0) {
    var x = 30;
    console.log("x3 is:" + x);
  }
  console.log("x4 is:" + x);
  var x = 40;
  var f = function (x) {
    console.log("x5 is:" + x);
  };

  f(50);
  console.log("x6 is:" + x);
}
main();
console.log("x7 is:" + x);

function a() {
    var x = 10; 
    function b(){
      x = 20; 
    }
    b();
  
    console.log(x);
  }
  
  a();