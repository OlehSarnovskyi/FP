// A recursive function to reverse a string
function reverseString(str) {
    return str.length === 0
        ? ''
        : str[str.length - 1] + reverseString(str.slice(0, str.length - 1))
}

console.log(reverseString('alo'))


// An async recursive function to call some apis
const request = {
    needToCall: true,
    payload: {},
    request: {
        needToCall: true,
        payload: {},
        request: {
            payload: {},
            needToCall: false,
        },
    }
}

async function fetchData({needToCall, payload, request}) {
    if (needToCall) {
        await callSmth(payload)
    }
    if (request.needToCall) {
        await fetchData(request)
    }
}
fetchData(request)


// Factorial function
function factorial(n) {
    return n === 0
        ? 1
        : n * factorial(n - 1)
}

console.log(factorial(5))


// deep copy
const deepClone = obj => {
    if (obj === null) return null
    let clone = Object.assign({}, obj)
    Object.keys(clone).forEach(key => {
        clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    });
    return clone
};

const obj1 = { a: 1, obj: { a1: 2, b1: 3 } }
const obj2 = (deepClone(obj1))
console.log(obj1 !== obj2)
console.log(obj1.obj !== obj2.obj)


// array flattening
function flatten(items) {
    const flat = []
    items.forEach(item => {
        Array.isArray(item)
            ? flat.push(...flatten(item))
            : flat.push(item)
    })
    return flat
}

const array = [1, 1, [2, 2], [[3, [4], 3], 2]]
console.log(flatten(array))
