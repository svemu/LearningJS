// Simple Console print statement

console.log("Hello World!");

// Declare variables

var a = 10;
let b = 20;
const c = 30;

// Print variables
console.log(a);
console.log(b);
console.log(c);

//Change variable value

a = 100;
b = 200;
//c = 300; // Error: Assignment to constant variable.

// Print variables
console.log(a);
console.log(b);
console.log(c);

// function to calculate speed

let speed, distance, time;

function calculateSpeed(distance, time) {
    speed = distance / time;
    return speed;
}
// call function

speed = calculateSpeed(100, 10);
console.log("Speed is " + speed);


