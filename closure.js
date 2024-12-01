
/** TOPIC Closure
 * A closure is a combination of a function enclosed with references to its lexical environment (surrounding state). 
 * In Javascript, closures are created every time a function is created.
 */
function appCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counter = appCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3