// 1.
const sum = a => {
    return b => {
        return c => {
            return a + b + c
        }
    }
}

console.log(sum(1)(2)(3))

const sum1 = sum(1)
const sum2 = sum1(2)
const result = sum2(3)

console.log(result)

// 2.
const logger = (level) => (tag) => (message) => {
    console.log(`[${level}] [${tag}] ${message}`)
}

const infoLogger = logger('INFO')
const errorLogger = logger('ERROR')

infoLogger('App')('Starting application')
errorLogger('DB')('Failed to connect to the database')

// 3.
function currying(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg)
    }
}

function sum(a, b, c) {
    return a + b + c
}
let add = currying(sum, 10)
add(20, 90)
add(70, 60)
