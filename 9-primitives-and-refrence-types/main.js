console.log("Primitive types")

let scoreOne = 50; 
let scoreTwo = scoreOne; 

console.log(`Before change:: scoreOne = ${scoreOne} and scoreTwo = ${scoreTwo}`);

scoreOne = 100; 

console.log(`After change:: scoreOne = ${scoreOne} and scoreTwo = ${scoreTwo}`);

console.log("Reference types"); 

let bookOne = {
    name: 'Money - Master the Game', 
    author: 'Anthony Robbins'
}; 

let bookTwo = bookOne; 

console.log(`Before change:: the value of bookOne is: `); 
console.log(bookOne);

console.log("Before change:: the value of bookTwo is: ")
console.log(bookTwo);

bookOne.author = 'Tony Robbins'; 

console.log('After change:: the value of bookOne is: '); 
console.log(bookOne); 

console.log('After change:: the value of bookTwo is: '); 
console.log(bookTwo);