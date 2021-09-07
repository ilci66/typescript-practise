//"tsc sandbox.ts -w" command is very annoying don't use it, compile when you want to manually
var test = "testing";
console.log(test);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) { return console.log(input); });
//prevent errors by defining a type in development, before compiling
var circ = function (dia) {
    return dia * Math.PI;
};
console.log(circ(21));
//the initial types and properties need to be matched to prevent errors in typescript
// arrays
var animals = ["cat", "dog", "bird"];
// these will throw errors
// animals.push(4)
// animals[0] = 2
// animals = "cat"
// objects
var user = {
    name: "kek",
    age: 27,
    occupation: "carpenter"
};
// these will throw errors
// user.hobies = ["skiing", "surfing"]
// user.name = 223
// user = ["some guy"]
// but this will not because it matches all the properties and their types
user = {
    name: "mik",
    age: 22,
    occupation: "baker"
};
// defining types explicitly
// even though they are undefined they will only accept certain types of values I define
var char;
var years;
var isHere;
// arrays
// made it equal to an empty array so I can push stuff later, got the logic here  
var people = [];
// union types are used for accepting multiple types
// need to use "()" for arrays, now can push here strings, numbers or booleans
var multiple = [];
// this can be equal to a string or a number, pretty obvious though
var userID;
// defining object type
var userOne;
// this works 
userOne = { name: "niki", petNum: 2, age: 42 };
// don't forget array is a type of object too so when you define the tpye as 
// object it can still be equal to an array, so this won't throw and error
userOne = [];
// or you can define it like this, looks like creating a schema for mongodb
var userTwo;
userTwo = { name: "jumpa", petNum: 3, age: "33" };
// userTwo = { name:"jumpa", petNum: 3, age: 33}
