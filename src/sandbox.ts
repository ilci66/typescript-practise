// //"tsc sandbox.ts -w" command is very annoying don't use it, compile when you want to manually
// const test = "testing"
// console.log(test)
// const inputs = document.querySelectorAll('input')
// inputs.forEach(input =>  console.log(input))
// //prevent errors by defining a type in development, before compiling
// const circ = (dia: number) => {
//   return dia * Math.PI
// }
// console.log(circ(21))
// //the initial types and properties need to be matched to prevent errors in typescript
// // arrays
// let animals = ["cat", "dog", "bird"] 
// // these will throw errors
// // animals.push(4)
// // animals[0] = 2
// // animals = "cat"
// // objects
// let user = {
//   name: "kek",
//   age: 27,
//   occupation: "carpenter"
// }
// // these will throw errors
// // user.hobies = ["skiing", "surfing"]
// // user.name = 223
// // user = ["some guy"]
// // but this will not because it matches all the properties and their types
// user = {
//   name: "mik",
//   age: 22,
//   occupation: "baker" 
// }
// // defining types explicitly
// // even though they are undefined they will only accept certain types of values I define
// let char: string;
// let years: number;
// let isHere: boolean;
// // arrays
// // made it equal to an empty array so I can push stuff later, got the logic here  
// let people: string[] = [];
// // union types are used for accepting multiple types
// // need to use "()" for arrays, now can push here strings, numbers or booleans
// let multiple: (string|number|boolean)[] = [];
// // this can be equal to a string or a number, pretty obvious though
// let userID: string|number;
// // defining object type
// let userOne: {};
// // this works 
// userOne = { name:"niki", petNum: 2, age:42};
// // don't forget array is a type of object too so when you define the tpye as 
// // object it can still be equal to an array, so this won't throw and error
// userOne = []
// // or you can define it like this, looks like creating a schema for mongodb
// let userTwo: {
//   name: string,
//   petNum: number,
//   age: number|string
// }
// // these are both fine
// userTwo = { name:"jumpa", petNum: 3, age: "33"}
// userTwo = { name:"jumpa", petNum: 3, age: 33}
// type "any" exists for if you wanna use different types in the future
// let person: any = 27;
// // these won't throw errors
// person = 22
// person = "hello"
// person = {name: "cathy"}
// // works the same way with arrays
// let mixed: any[] = [];
// mixed.push("cat")
// mixed.push(true)
// mixed.push(77)
// // "any" can be used like this in objects
// let user: {name: any, age: any};
// user = {name: "jamie", age: "33"};
// // or
// user = {name: "king slayer", age: 33}

// FUNCTIONS
// // functions can be given types before defining as well
// let greeting: Function;
// // so this throws an error
// // greet= "wassap"
// // but this doesn't
// greeting = () => {
//   console.log('wassap general kenobi')
// }
// // arguements can also have types
// const add = (a: number, b:number) => {console.log(a+b)}
// // optional arguements can be defined with "?" 
// const divide = (a:number, b:number, c?: number | string) => {
//   console.log(a/b)
//   // if there's no third argument it will show undefined
//   console.log("and this is the third one", c)
// }
// // defaults also can be defined like this
// const divide2 = (a:number, b:number, c: number | string = 2) => {
//   console.log(a/b)
//   console.log("and this is the third one", c)
//   return a/b
// }
// // the returned value's type is given to the variable defined to, in this case number
// const divided2 = divide2(10,22)
// // if nothing is returned the type becomes void and void is not undefined
// const divided = divide(55,55)
// // the type of the return can be defined as well like this
// // can be any type including void
// const example = (a:number, b:number): number => {
//   return a * b
// }
// TYPE ALIASES
// // types can be defined similar to variables like this
// type StringOrNum = string | number;
// // apparently this is commonly used as well so know you can use it this way 
// type objWithName = { name: string, uid: StringOrNum}

// const itemId = (uid: StringOrNum, item: string) => {
//   console.log(`${item} with id: ${uid}`)
// }
// // and I used here afterwards cleaning up my code a bit
// const userLogin = (user: objWithName) => {
//   console.log(`${user.name} logged in with id: ${user.uid}`)
// }