/********* CONCEPT JS FUNCTIONS **********/

var variable = 10;

(() => {
    foo = 100;
    variable = 20;
    console.log(variable);
    var foo = 50;
    variable  = 30;
})();

// console.log(foo); // ReferenceError: foo is not defined
console.log(variable);

for(var i=0;i<5;i++) {
    setTimeout(()=> console.log(i),0);
}

for(let i=0;i<5;i++) {
    setTimeout(()=> console.log(i),0);
}

var fullName = "Global User"

var obj = {
    fullName: "Obj User",
    prop: {
        fullName: "Prop user",
        getFullName: function () {
            console.log(this.fullName);
        }
    },
    getFullName: function () {
        console.log(this.fullName);
    },
    getFullNameArrow: () => {
        console.log(this.fullName);
    },
    getFullNameIife: (() => {
        console.log(this.fullName);
    })(),
}

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameArrow());
// console.log(obj.getFullNameIife()); // TypeError: obj.getFullNameIife is not a function
console.log(obj.getFullNameIife);

const bigperson = {
    name: "Polo",
    sayhi: function() {
        console.log(`Hi from ${this.name}`)
    },
    greet: function(name, age) {
        console.log(`Hello! ${name} ${age}: ${this.name}`)
    }
}


let person = {
    name: "John"
}

/**
 * TOPIC Call()
 * Allows to call a function with a specified this value & arguments provided indiviually
 */
bigperson.greet.call(person, "Call", 5);

/**
 * TOPIC Apply()
 * Allows to call a function with a specified this value & arguments provided in array
 */
bigperson.greet.apply(person, ["Apply", 5]);

/**
 * TOPIC Bind()
 * Returns a new function with a specified this value and any arguments that are passed.It does not call the function but instead return a new function
 */
const bindFun = bigperson.greet.bind(person, "Bind", 5);
bindFun();

setTimeout(bigperson.sayhi,2000);
setTimeout(bigperson.sayhi.bind(bigperson),2000);