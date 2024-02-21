// 1.
function multiplyBy(factor) {
    return function(number) {
        return number * factor
    }
}

const double = multiplyBy(2)
const triple = multiplyBy(3)

console.log(double(5))
console.log(triple(5))

// 2.
const numbers = [1, 2, 3, 4, 5]

const strings = numbers.map((num) => num.toString())

console.log(strings)


// 3.
function greet() {
    console.log('Hello, world!')
}

setTimeout(greet, 2000)
