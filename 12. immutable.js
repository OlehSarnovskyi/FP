// Immutable object
const person = { name: "John", age: 30 }
const updatedPerson = { ...person, age: 31 }

// Immutable array
const numbers = [1, 2, 3]
const updatedNumbers = [...numbers, 4]


// Mutation
const products = [
    {
        id: 1,
        price: 300
    },
    {
        id: 2,
        price: 100
    }
]
products.forEach((product) => {
    product.price = `${product.price} €`
})
// Immutable
const formattedProducts = products.map(product => ({
    ...product,
    price: `${product.price} €`
}))


// Mutation
const user = { name: "Alice", age: 25 }

function increaseAge(user) {
    user.age++
}
increaseAge(user)
console.log(user)

// Immutable
const user2 = { name: "Alice", age: 25 }

function increaseAge2(user) {
    return { ...user, age: ++user.age }
}
console.log(increaseAge2(user2))
