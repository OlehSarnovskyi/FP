// Lazy evaluation, also known as call-by-need, is an evaluation strategy
// in programming languages that delays the evaluation of an expression until its value is actually needed.

// Lazy evaluation has a number of advantages, including:
// Improved performance: Lazy evaluation can avoid unnecessary computation
// Memory efficiency: can improve memory efficiency by avoiding the allocation
//                    of memory for values that are never actually used.
// Expressiveness: can make programs more expressive by allowing the programmer
//                 to define data structures and functions that are not fully evaluated until they are needed.

// Lazy evaluation is a common feature of functional programming languages such as Haskell and Lisp

// Haskell
// For example, when evaluating f 5 (29^35792),
// the second argument will simply be packaged up into a thunk without doing any actual computation,
// and f will be called immediately.
// Since f never uses its second argument the thunk will just be thrown away by the garbage collector.


// REAL-WORLD JS EXAMPLES

// 1. Lazy add
// Eager Evaluation
const add = (x, y) => x + y
const eagerResult = add(1 + 2, 3 + 4)  // Returns 10

// Lazy Evaluation
function lazyAdd(x, y) {
    return () => x() + y()
}
const x = () => 1 + 2
const y = () => 3 + 4

const lazyResult = lazyAdd(x, y);  // Stores a function to be called later
console.log(lazyResult()); // Logs 10 when evaluated

// 2. AND (&&) and OR (||) operators
// true || someFunction()
// false && someFunction()

// 3. Lazy Sequences
const range = (l, u = Infinity) => function* () {
    while (true) {
        if (l < u) {
            yield l++;
            continue;
        }
        return l;
    }
};
const from1To3 = range(1, 3)()
console.log(from1To3.next().value)
console.log(from1To3.next().value)
console.log(from1To3.next().value)
console.log(from1To3.next().value)

// 4. Infinite lists (only even numbers)
function* infiniteEvenNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number += 2;
    }
}

const evenNumbers = infiniteEvenNumbers();

console.log(evenNumbers.next().value); // Output: 0
console.log(evenNumbers.next().value); // Output: 2
console.log(evenNumbers.next().value); // Output: 4

// 5. Virtual scroll
// https://dev.to/adamklein/build-your-own-virtual-scroll-part-i-11ib

// 6. Lazy loading, lazy loaded modals

// 7. RxJS
// observable
// subjects

// 8. lazy.js;
// https://danieltao.com/lazy.js/
const Lazy = require('lazy.js')

var fibonacci = Lazy.generate(function() {
    var x = 1,
        y = 1;
    return function() {
        var prev = x;
        x = y;
        y += prev;
        return prev;
    };
}());

console.log(fibonacci.take(10).toArray())
// Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
