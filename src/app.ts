// importing the Invoice class with "js" extension not "ts", important
import { Invoice } from './classes/Invoice.js'


// I don't like to use /* */ so gonna do double comment 
// You need to put the "!" in the end if you know the element exists
// otherwise ts will throw and error, saying it might be equal to null
const anchor = document.querySelector('a')!;
// or you could do an if, but the method above is better
// if(anchor){
//   console.log(anchor.href);
// }
console.log(anchor.href)
// when you hover over you can see the types 
// if you are selecting by the class  or something like that it will show
// the type element instead of the actual type because a class could be 
// given to any element, in that case you need to specify the type 
// no "!" here don't forget
const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)
// this way we can also select inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// "Event" is also a built in type
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    // amount.value
    // by default javascript turns numbers into strings when selected this way
    // so instead of "value" I can use "valueAsNumber"
    amount.valueAsNumber
    )
})

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

const invOne = new Invoice("mario", "mario website", 200);
const invTwo = new Invoice("luigi", "luigi website", 150);

let invoices: Invoice[] = []; 
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
  // private values are still accessible this way as I wrote above
  console.log(`${inv.client} ${inv.amount} ${inv.format()}`)
})

// // >>>> INTERFACES
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// any variable that claims to be a person needs to have these all the IsPerson 
// properties, no more no less
const me: IsPerson = {
  name: "Ilker",
  age: 27,
  // I don't need to specify the retun type it's inferred but adding it 
  // just to be explicit cause I'm learning 
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`spending this much: ${amount}`);
    return amount
  }
}

// now I can even write a function that expects this interface as an argument
const greetPerson = (person: IsPerson) => {
  console.log('Hi!', person.name)
}
greetPerson(me)

console.log(me)