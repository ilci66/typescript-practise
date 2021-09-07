//"tsc sandbox.ts -w" command is very annoying don't use it, compile when you want to manually
const test = "testing"
console.log(test)

const inputs = document.querySelectorAll('input')

inputs.forEach(input =>  console.log(input))

//prevent errors by defining a type in development, before compiling
const circ = (dia: number) => {
  return dia * Math.PI
}

console.log(circ(21))