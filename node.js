const fs = require('fs');
const crypto = require("crypto");

// DEAFULT IS 4
process.env.UV_THREADPOOL_SIZE = 5

const start = Date.now();

setTimeout(() => console.log("Timeout Code"), 0);

setImmediate(()=> console.log("Immediate Code"));

fs.readFile('sample.txt','utf-8',() => {
    console.log('IO Polling Finish');

    setTimeout(() => console.log("Timeout Code Inside fs 0 sec"), 0);
    setTimeout(() => console.log("Timeout Code Inside fs 5 sec"), 5000);
    setImmediate(()=> console.log("Immediate Code Inside fs"));

    // CPU Intensive Work
    crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start} ms `,'CPU Intensive Task 1 Done');
    });

    crypto.pbkdf2('password2','salt',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start} ms `,'CPU Intensive Task 2 Done');
    });

    crypto.pbkdf2('password3','salt',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start} ms `,'CPU Intensive Task 3 Done');
    });

    crypto.pbkdf2('password4','salt',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start} ms `,'CPU Intensive Task 4 Done');
    });

    crypto.pbkdf2('password5','salt',100000,1024,'sha512',()=>{
        console.log(`${Date.now() - start} ms `,'CPU Intensive Task 5 Done');
    });
})

console.log("Top Level Code")