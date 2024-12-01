const obj1 = {
    height: "50",
}

console.log(obj1.height);
delete obj1.height;
console.log(obj1.height);

const obj2 = Object.create({
    height: "50"
})

console.log(obj2);
console.log(obj2.height);
delete obj2.height;
console.log(obj2.height);