//Template literal

console.log(`Hello! I'm a string`); //using back-ticks `` instead of single or double quotes

console.log("string text 1/n" + "string text 2"); //you'd need to use \n to create 2 lines.

console.log(`Hello I'm a string continues on this line`); //using `` allows a econd line of console log when you hit enter

const name = "Jimmy"

const day = "Wednesday"

console.log("Hello" + name + "I hope you have a great day on" + day); //uses string concatenation to create a proper console log sentence

// NOTE: the way it is written here, the console will read: HelloJimmyI hope you have a great day onWednesday
//to make it read properly you'll need to make sure to add spaces inside your quotes, ie. "Hello "

console.log(`Hello ${name} I hope you have a great day on ${day}!`); //interpolation

//interpolation can be used on objects as well

const instructor = {
    name: "Chris",
    lesson: "ES6",
    greet: function(){
        return `Our instructor ${this.name} is teaching ${this.lesson} today` //we can use interpolation for functions as well. When we reference an object's own properties we use "this"
    }
}

console.log(`Our instructor ${instructor.name} is teaching ${instructor.lesson} today`);

console.log(instructor.greet());

function foo() {
    let x = true; //because the let is within function foo but outside the if statement, it can be used "globally" within the foo function
                   // this is called hoisting and is part of scope. Think of "scope of influence", as in "what can this affect?"
    if(x) {
        var usingVar = "I'm using var";
    }
    console.log(usingVar); 
}
foo(); //Console reads: I'm using var

const instructors = ["Jimm", "Christ"]
//instructors = ["Jim", "Chris"] //instructors = ["Jim", "Chris"]
                                          // ^
                                          // TypeError: Assignment to constant variable.

instructors.push("Jack", "Jill"); //instructors now consists of [ 'Jimm', 'Christ', 'Jack', 'Jill' ]

console.log(instructors);
//const also accepts uppercase

function hello(name) {
    name = name || 'Mystery Person';
    console.log("Hello" + name + "!");
};
hello("Bobby"); //HelloBobby!

hello(name); //HelloJimmy!

hello(); //HelloMystery Person!
//NOTE: Again, the console logs above don't have proper spacing because + " " + wasn't included.

hello(" Bobby!"); //Hello Bobby!

hello(" "+name); //Hello Jimmy!

function hello1(name = 'Mystery Person') {
    console.log(`Hello ${name} is it me you're looking for`);
}

hello1(); //Hello Mystery Person is it me you're looking for
//NOTE: I named this function hello1 because if I'd named it hello, it would've console logged all of the previous results with these new parameters.
                    // Hello Bobby is it me you're looking for
                    // Hello Jimmy is it me you're looking for
                    // Hello Mystery Person is it me you're looking for
                    // Hello  Bobby! is it me you're looking for
                    // Hello  Jimmy is it me you're looking for
        //Which, yikes.

const teacher = {
    name = "Jimm",
    speak() {
        //bind a function to specific context
    let boundFunction = () => {
        console.log("later my name is " + this.name);
    }
    //bound function will always run in bound context
    setTimeout(boundFunction, 1000);
    }
};

teacher.speak();
//Lexical Binding - They bind to scope where defined not where they are used.

let students = [
    {name: 'Hugo'},
    {name: 'Candace'},
    {name: 'Taylor'},
    {name: 'Dimitri'}
];

let names = students.map((student) => students.name);
//Same as
let names = students.map((student) => {
    return student.name
})
console.log(names);

function add() {
    console.log("arguments object:", arguments);

    var numbers = Array.prototype.slice.call(arguments);

    var sum = 0;

    numbers.forEach(function (number){
        sum += number;
    });
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8,));

//ES6 Way
let add = (...numbers) => {
    console.log("rest parameters", numbers);
    let sum = 0
    numbers.forEach(function (number){
        sum += number;
    });
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8));
//Rest Parameter

let add = (...numbers) => numbers.reduce((sum, number) => sum += number, 0); 

function addStuff(x,y, ...z){
    return (x+y) * z.length
}

console.log(addStuff(1,2, "hello","world",true, 99))

//Spread

let random = ["Hello", "World", true , 99]
let newArrary = [1,2, ...random, 3]

console.log(newArray);
//[1,2,"Hello","World",true,99,3]

let spreadEx = (item) => {
    let spreadArray = [...item]
    console.log(spreadArray);
    return spreadArray
}

spreadEx("Hello World")


let restEx = (...z) => {
    console.log(z)
    return z
}

restEx("hello", "world")

var students = ["Julian", "AJ", "Matt"];
var x = students [0];
var y = students[1];
var z = students[2];

console.log(x, y, z);

let students = ["Julian", "AJ", "Matt"]
let [x, y, z] = students

let[x, ,z] = students

let [x, ...rest] = students;
console.log(x, rest);

//Julian ["AJ", "Matt"]

let completedHomework = () => {
    return ["Julian", "AJ", "Matt"];
}

let timeFrame = () => {
    return "What time is it?"
}

//Instructor Function

function Person (name, job) {
    this.name = name;
    this.job = job;
}

Person.prototype.getName = function getName() {
    return this.name;
}

var goodGuy = new Person ("Aang", "Airbender");
console.log(goodguy.getName())