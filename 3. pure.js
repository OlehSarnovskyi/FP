// 1.
const add = (a, b) => a + b

console.log(add(2, 3))
console.log(add(2, 3))

// 2.
const addProp = (obj, prop, value) => ({
    ...obj,
    [prop]: value,
})

const person = { name: 'John', age: 35 }
const updatedPerson = addProp(person, 'city', 'Lviv')

console.log(updatedPerson)
console.log(person)

// 3. HOF can be Pure function?
const sortArray = (arr, sortFunction) => arr.slice().sort(sortFunction)

const numbers = [3, 1, 2]

console.log(sortArray(numbers, (a, b) => a - b))
console.log(numbers)
