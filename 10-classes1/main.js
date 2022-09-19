// Class Declaration
class Rectangle1 {
    constructor(height, width) {
        this.height = height; 
        this.width = width;
    }
}

let e = new Rectangle1(2,1); 
console.log("Class Declaration: " + Rectangle1.name); 

// Class Expression

// 1. Unnamed class expressions
let Square1 = class {
    constructor(height, width){
        this.height = height; 
        this.width = width; 
    }
}; 

console.log("Class Expression - Unnamed Class: " + Square1.name); 

// 2. Named class expressions
Square2  = class AnotherSquare {
    constructor(height, width) {
        this.height = height; 
        this.width = width; 
    }
}

console.log("Class Expression - Named Class: " + Square2.name); 

// Static Members

class Point1 {
    constructor(x, y){
        this.x = x; 
        this.y = y; 
    }

    // Member property
    static displayName = "Point"; 

    static distance(a, b) {
        const dx = a.x - b.x; 
        const dy = a.y - b.y; 

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point1(5, 5); 
const p2 = new Point1(10, 10); 

console.log("Static member property - displayName: " + Point1.displayName);
console.log("Static member method - display(): " + Point1.distance(p1, p2));

// Instance properties

// 1. Public field declarations
class Rectangle2 {
    // The following properties are public properties
    height = 0; 
    width; 

    constructor(height, width) {
        this.height = height; 
        this.width = width; 
    }
}

let rectangle2 = new Rectangle2(12, 11);
console.log("Displaying the values of public instance properties, the properties are accessible outside the class") 
console.log("height of rectangle2: " + rectangle2.height + ", width of rectangle2 " + rectangle2.width);

// 2. Private field declarations
class Rectangle3 {
    // The following properties are private properties
    #height = 0; 
    #width; 

    constructor(height, width) {
        this.#height = height; 
        this.#width = width;
    }
}

let rectangle3 = new Rectangle3(10, 9);
console.log("Displaying the values of private instance properties from outside the class results in the value to be undefined") 
console.log("height of rectangle3: " + rectangle3.height + ", width of rectangle3 " + rectangle3.width);

// Inheritance

class Animal {
    constructor(name) {
        this.name = name; 
    }

    speak() {
        console.log(`${this.name} makes a noise`); 
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); 
    }

    // Method overriding
    speak() {
        console.log(`${this.name} barks`); 
    }
}

const rocky = new Dog('Rocky'); 
rocky.speak();