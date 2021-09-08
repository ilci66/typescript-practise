"use strict";
// I don't like to use /* */ so gonna do double comment 
// You need to put the "!" in the end if you know the element exists
// otherwise ts will throw and error, saying it might be equal to null
var anchor = document.querySelector('a');
// or you could do an if, but the method above is better
// if(anchor){
//   console.log(anchor.href);
// }
console.log(anchor.href);
// when you hover over you can see the types 
// if you are selecting by the class  or something like that it will show
// the type element instead of the actual type because a class could be 
// given to any element, in that case you need to specify the type 
// no "!" here don't forget
var form = document.querySelector('.new-item-form');
// console.log(form.children)
// this way we can also select inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// "Event" is also a built in type
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, 
    // amount.value
    // by default javascript turns numbers into strings when selected this way
    // so instead of "value" I can use "valueAsNumber"
    amount.valueAsNumber);
});
// // >>>>> CLASSES
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "mario website", 200);
var invTwo = new Invoice("luigi", "luigi website", 150);
// now I can create and array and define the type to "Invoice" so it 
// only accepts objects created using the Invoice class
var invoices = [];
// intial value is "[]" so I can push stuff inside
invoices.push(invOne);
invoices.push(invTwo);
// I can change the values if I want want to, careful with thte type though
invOne.amount = 300;
console.log(invOne);
console.log(invoices);
