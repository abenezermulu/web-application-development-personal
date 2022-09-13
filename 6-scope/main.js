// var, let and scope
// let x = 10;
// x = 20;
// console.log(x);

// global scope
// var x = 2;

// // local scope

// // block scope
// {
//   let y = 4;
//   console.log("y inside block scope " + y);
// }
// // this will result in error b/c y is inside block scope
// console.log("y outside block scope results the following error");
// console.log(y);

// // function scope
// function myFunc() {
//   const z = 5;
//   console.log("z inside function scope " + z);
// }
// // this will result in error b/c z is inside function scope
// console.log("y outside block scope results the following error");
// console.log(z);

// myFunc();
/*********************************************************************/

/*
    Implied globals 
        -> if you declare variable without var, js declares the variable globally 
*/
function foo(){
    x = 4; 
    print();
}

function print(){
    console.log(x);
}

foo();