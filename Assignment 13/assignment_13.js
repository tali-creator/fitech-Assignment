class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 10);
console.log("Area of the rectangle:", rect.getArea());

//question 2
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = numbers;

console.log("a:", a);       
console.log("b:", b);       
console.log("rest:", rest);

//question 3
const car = {
    name:"BMW",
    color: "Red",
    price: "$40000",
    speedLimit: "400kmh"
}

for(const n in car){
    console.log(`${n}: ${car[n]}`)
}

//question 4
function sumNumbers(...rest){
    return rest.reduce((sum,num) => sum + num, 0)
}
console.log(sumNumbers(1,2,3,4,5,6))

//question 5

function getFullName({firstName, lastName}){
    return `${firstName} ${lastName}`;
}
const user = {firstName: "Tali", lastName: "Nanzing"};
console.log(getFullName(user))

//question 6
const array1 = [1,2,3,4,5,6];
const array2 = [7,8,9,10,11,12];
const combineArray = [...array1, ...array2]
console.log(combineArray)

//question 7
function swap(a, b){
    [a, b] = [b, a];
    return [a, b];
}

// // question 8

// import { add, subtract} from './math.js';
// console.log("Addition", add(5, 3))
// console.log("Subtraction", subtract(5, 3))

//question 9
 class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`)
    }
 }
 const person1 = new person("alice", 25);
 person1.introduce();

 //question 10

function greet(name = "Guest", ...additionalGreetings) {
    console.log(`Hello, ${name}!`);
    
    additionalGreetings.forEach(greeting => console.log(greeting));
}

greet("Alice", "Welcome to the team!", "Hope you have a great day!"); 

greet(); 
