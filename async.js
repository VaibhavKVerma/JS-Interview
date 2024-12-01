
/***** CONCEPT JS ASYNCHRONOUS ********/

/**
 * TOPIC Callbacks
 * A callback is a function passed as an argument to another function
 */
const myFun = () => 1;
setTimeout(myFun, 3000);// myFun is a callback function which will execute after 3 secs

/**
 * TOPIC Promises
 * Promise object represents the eventual completion/failure of an asynchrnous operation & its resulting value.
 * Promises is said to be settles with either fulfilled or rejected, but not pending.
 */

const promise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    // If it succeeds, call resolve with the resulting value
    // If it fails, call reject with an error object
    resolve(5);
});

promise
    .then((result) => {
        // Multiply the result by 2
        return result * 2;
    })
    .then((result) => {
        // Add 5 to the result
        return result + 5;
    })
    .then((result) => {
        console.log(result); // 25
    });


//Promise.all(): Waits for all Promises to fulfil and returns an array of results.
//Promise.race(): Resolves or rejects as soon as any of the Promises resolves or rejects.