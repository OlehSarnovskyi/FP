// 1.
const multiply = (...args) => args.reduce((acc, arg) => acc * arg)

const partialMultiply = multiply.bind(null, 2)

console.log(partialMultiply(3, 4))

const partialMultiply2 = partialMultiply.bind(null, 5)

console.log(partialMultiply2(6))


// 2.
const filterArray = (predicate, array) => array.filter(predicate)

const filterGreaterThanTen = filterArray.bind(null, num => num > 10)

const numbers = [5, 10, 15, 20, 25]
const filteredNumbers = filterGreaterThanTen(numbers)

console.log(filteredNumbers)


// 3.
const logMessage = (type, message) => console.log(`[${type}]: ${message}`)

const logInfo = logMessage.bind(null, 'INFO')
const logError = logMessage.bind(null, 'ERROR')

logInfo('User logged in')
logError('Something went wrong')
