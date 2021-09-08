// // I don't like to use /* */ so gonna do double comment 
// // You need to put the "!" in the end if you know the element exists
// // otherwise ts will throw and error, saying it might be equal to null
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
