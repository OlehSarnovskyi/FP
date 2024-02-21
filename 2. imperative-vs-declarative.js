// Imperative approach
const ingredients = [
    {
        name: 'cabbage',
        grams: '250'
    },
    {
        name: 'tomato',
        grams: '200'
    },
    {
        name: 'cucumber',
        grams: '100'
    },
    {
        name: 'red pepper',
        grams: '100'
    },
    {
        name: 'radish',
        grams: '100'
    },
    {
        name: 'oil',
        grams: '20'
    }
]
let salad = ''

for (let i = 0; i < ingredients.length; i++) {
    salad += `${ingredients[i].name} ${ingredients[i].grams} \n`
}

console.log(salad)


// Declarative approach
const ingredients2 = [
    {
        name: 'corn',
        grams: '100'
    },
    {
        name: 'tomato',
        grams: '200'
    },
    {
        name: 'cucumber',
        grams: '150'
    },
    {
        name: 'red pepper',
        grams: '100'
    },
    {
        name: 'radish',
        grams: '100'
    },
    {
        name: 'oil',
        grams: '20'
    },
    {
        name: 'paper',
        grams: '10'
    }
]

function addIngredient(acc, { name, grams }) {
    return acc + `${name} ${grams} \n`
}

const salad2 = ingredients2.reduce(addIngredient, '')

console.log(salad2)

