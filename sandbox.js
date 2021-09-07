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
