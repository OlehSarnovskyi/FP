// 1.
const { compose, pipe } = require('ramda') // or lodash

const add = x => x + 1
const multiply = x => x * 2
const square = x => x * x

const composedFn = compose(square, multiply, add)
console.log(composedFn(3))

const pipedFn = pipe(add, multiply, square)
console.log(pipedFn(3))


// 2. the more traditional way (compose)
const double = (num) => num * 2

const result = double(square(add(2)))

console.log(result)


// 3.
const compose = (...functions) =>
                (input) =>
                functions.reduceRight((result, fn) => fn(result), input)

const composedFunction = compose(double, square, add)
const composedResult = composedFunction(2)

console.log(composedResult)

export function pipe(...fns) {
    return (...vals) => fns.reduce((accumulator, fn) => fn(accumulator), fns.shift()(...vals));
}
