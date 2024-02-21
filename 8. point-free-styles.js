const numbers = [1, 2, 3, 4, 5]

// 1.
// Regular style
const squared1 = numbers.map((x) => x * x)

// Point-free style
const square = (x) => x * x
const squared2 = numbers.map(square)

// 2.
// Regular style
const even1 = numbers.filter((x) => x % 2 === 0)

// Point-free style
const isEven = x => x % 2 === 0
const even2 = numbers.filter(isEven)

// 3.
// Regular style
const sumSquares1 = numbers
    .map((x) => x * x)
    .reduce((acc, curr) => acc + curr, 0)

// Point-free style
const sum = (a, b) => a + b
const sumSquares2 = numbers
    .map(square)
    .reduce(sum, 0)
