function a() {
    console.log("A");
}

setTimeout(() => console.log("B"),0); // callback queue

a();

console.log("C");

new Promise((resolve) => resolve("D")).then((res) => console.log(res));  // micro task 

// Priority -> Call Stack > Micro Task Queue > Call Back Queue