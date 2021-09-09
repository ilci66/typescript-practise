// importing the Invoice class with "js" extension not "ts", important
import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';



// I don't like to use /* */ so gonna do double comment 
// You need to put the "!" in the end if you know the element exists
// otherwise ts will throw and error, saying it might be equal to null
// const anchor = document.querySelector('a')!;
// // or you could do an if, but the method above is better
// // if(anchor){
// //   console.log(anchor.href);
// // }
// console.log(anchor.href)
// // when you hover over you can see the types 
// // if you are selecting by the class  or something like that it will show
// // the type element instead of the actual type because a class could be 
// // given to any element, in that case you need to specify the type 
// // no "!" here don't forget
// const form = document.querySelector('.new-item-form') as HTMLFormElement
// // console.log(form.children)
// // this way we can also select inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// // "Event" is also a built in type
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();

//   console.log(
//     type.value,
//     tofrom.value,
//     details.value,
//     // amount.value
//     // by default javascript turns numbers into strings when selected this way
//     // so instead of "value" I can use "valueAsNumber"
//     amount.valueAsNumber
//     )
// })

// // >>>>> CLASSES
// class Invoice {
//   // you can define the types before the constructor
//   client: string;
//   details: string;
//   amount: number;
//   constructor( c:string, d:string, a:number){
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`
//   }
// }

// const invOne = new Invoice("mario", "mario website", 200);
// const invTwo = new Invoice("luigi", "luigi website", 150);

// // now I can create and array and define the type to "Invoice" so it 
// // only accepts objects created using the Invoice class
// let invoices: Invoice[] = []; 
// // intial value is "[]" so I can push stuff inside
// invoices.push(invOne)
// invoices.push(invTwo)
// // I can change the values if I want want to, careful with thte type though
// invOne.amount = 300
// console.log(invOne)
// console.log(invoices)

// // REWRITING THE SAME CLASS WITH ACCESS MODIFIERS
// class Invoice {
//   // the default behaviour is "public" but to demonstrate I will 
//   // add that too here
//   // well "readonly" is pretty self explanatory but yeah you 
//   // can't change it by assigning another value to it
//   readonly client: string;
//   // when it's "private" it can't be accessed outside the class but
//   // it's still available to the format method which is inside the class
//   private details: string;
//   public amount: number;
//   // 
//   constructor( c:string, d:string, a:number){
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`
//   }
// }

// >>>> I carried this into a different module
// with the usage of access modifiers the whole class can be shorthanded
// class Invoice { 
//   constructor( 
//     readonly client: string, 
//     private details: string, 
//     public amount: number
//   ) {}
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`
//   }
// }

// const invOne = new Invoice("mario", "mario website", 200);
// const invTwo = new Invoice("luigi", "luigi website", 150);

// let invoices: Invoice[] = []; 
// invoices.push(invOne)
// invoices.push(invTwo)


// invoices.forEach(inv => {
//   // private values are still accessible this way as I wrote above
//   console.log(`${inv.client} ${inv.amount} ${inv.format()}`)
// })

// // >>>> INTERFACES
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// // any variable that claims to be a person needs to have these all the IsPerson 
// // properties, no more no less
// const me: IsPerson = {
//   name: "Ilker",
//   age: 27,
//   // I don't need to specify the retun type it's inferred but adding it 
//   // just to be explicit cause I'm learning 
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log(`spending this much: ${amount}`);
//     return amount
//   }
// }

// // now I can even write a function that expects this interface as an argument
// const greetPerson = (person: IsPerson) => {
//   console.log('Hi!', person.name)
// }
// greetPerson(me)

// console.log(me)


// // >>>>>> INVOICES AND CLASSES

// // as both Payment and Invoice classes have implemented this interface
// // I can use both of them for the following variables
// // just making sure that the values I store inside these variables 
// // implements the interface
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web stuff', 220);
// docTwo = new Payment('assasin', 'eliminated rival', 100);

// // or create an array for variables that implement Has Formatter interface
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// const form = document.querySelector('.new-item-form') as HTMLFormElement

// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();

//   let doc: HasFormatter;
//   if(type.value === "invoice"){
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
//   }else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
//   }

//   // console.log(
//   //   type.value,
//   //   tofrom.value,
//   //   details.value,
//   //   amount.valueAsNumber
//   //   )
//   // instead of all this now I can just use console.log(doc)
//   console.log(doc)
// })


// // >>>>> RENDERING AN HTML TEMPLATE

// const form = document.querySelector('.new-item-form') as HTMLFormElement

// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// // now to create the list instance making use of the class
// const ul = document.querySelector('ul')!;
// const list = new ListTemplate(ul)

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();

//   let doc: HasFormatter;
//   if(type.value === "invoice"){
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
//   }else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
//   }

//   // console.log(doc)
//   // instead of just loging it I can now make use of the render method and create list elements on the dom
//   list.render(doc, type.value, 'end')
// })


// // >>>>> GENERICS
// // basically reusable blocks of code which can be used with different kinds of code
// // the "T" here, captures whatever item is passed in here, to prevent other types being
// // used as arguments we add "extends object" so we accept objects
// // the part after extends is up to me really could be this too "extends {name:string}"
// // this way it would accept objects with name property which is type string
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// let exampleOne = addUID({ name: "mario", age:"32" })
// // we are not specifiying what the object will be so console.log(exampleOne.name)
// // throws an error, but this can be fixed by using a generic and defining what it will look like
// // "T" is added to fix that issue
// console.log(exampleOne.name)

// // Generics can also be used with interfaces, remember interfaces define how an object should look
// // by using generics here what I'm really saying is I will define the type of data as I'm assigning it
// // in the future when I use this interface
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// // So all of these are fine because of the use of generics, as long as I define it here
// const exampleTwo: Resource<object> = { uid: 2, resourceName: 'person', data: { name: "ilker" } }
// const exampleThree: Resource<string> = { uid: 3, resourceName: 'person', data: "ilker" }
// const exampleFour: Resource<string[]> = { uid: 4, resourceName: 'person', data: ["ilker", "akbiyik"] }


// // >>>> ENUMS
// enum ResourceType { BOOK, FILM, AUTHOR, DIRECTOR, PERSON }

// interface Resource<T> {
//   uid: number;
//   // the object I will create will use this interface and I will be able to use enums through this interface
//   resourceType: ResourceType;
//   data: T;
// }

// const exOne: Resource<object> = {
//   uid: 1,
//   //I can choose one of the types I have defined above as enum
//   resourceType: ResourceType.DIRECTOR,
//   data: { name: "Peter Jackson" }
// }

// const exTwo: Resource<string> = {
//   uid:2,
//   resourceType: ResourceType.BOOK,
//   data: "For whom the bells toll"
// }

// // in the console what appears as their resourceType is a number instead of the types I have defined
// // This way when I'm creating these objects I don't need to remember the indexes, useful stuff 
// console.log(exOne, exTwo)


// // >>>> TUPLES
// // updating the code with tuples
// // one we define a certain position to be a certain type we can't change it, both type and position matters
// let tup: [string, number, boolean];
// tup = ["raiden", 2000, true];
// // new values can be assigned while being careful about the position and the type
// tup[2] = false;
// console.log(tup)

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// now to create the list instance making use of the class
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // tuples can be used here 
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if(type.value === "invoice"){
    // don't forget to use spread operator to get rid of the brackets, looks cleaner
    doc = new Invoice(...values)
  }else {
    doc = new Payment(...values)
  }

  // console.log(doc)
  // instead of just loging it I can now make use of the render method and create list elements on the dom
  list.render(doc, type.value, 'end')
})
