/********* CONCEPT JS HOISTING **********/
console.log(x);
var x = 5;
console.log(x);

//console.log(y,z);//Cannot access 'y' 'z' before initialization
let y = 5; 
const z = 5;


myFun();

var myFun = function() {
    console.log("First Call");
}

myFun();

function myFun() {
    console.log("Second Call");
}

myFun();