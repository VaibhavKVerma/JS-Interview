# NodeJS

**Node.js** is an open-source, cross-platform runtime environment for running JavaScript code outside a web browser. It is built on Google's **V8 JavaScript engine** (used in Chrome) and **Libuv**(to handle asynchronous operations) and is designed to execute JavaScript on the server side.

## Core Characteristics of Node.js :-

### JavaScript Runtime

1. Node.js enables JavaScript, traditionally a client-side scripting language, to run on the server.
2. This means you can build the entire stack (frontend and backend) using JavaScript.

### Asynchronous and Non-Blocking I/O

1. Node.js is designed for high concurrency by using a single-threaded event loop with a non-blocking I/O model.
2. This allows it to handle thousands of concurrent requests efficiently without creating a separate thread for each request.

### Event-Driven Architecture

1. Node.js operates on an event loop that processes requests asynchronously.
2. Events (like incoming HTTP requests) are queued and processed without blocking the main thread.

### Single-Threaded with Worker Threads

1. The main JavaScript execution runs on a single thread.
2. Heavy tasks (like file system access or database queries) can use a thread pool (via the libuv library).

## WORKING

**Request Received**: A client sends a request to the Node.js server. This request is placed in the event queue.

**Event Loop**: The event loop checks the call stack for ongoing tasks. If the stack is empty, it processes tasks from the event queue.

**Synchronous Task**: If the request involves a synchronous task (e.g., a simple calculation), the task is placed on the call stack. The call stack executes the task and removes it once complete.

**Asynchronous I/O Task (e.g., DB query)**: If the request involves an asynchronous I/O task (e.g., querying the database), the event loop offloads this task to the thread pool.The event loop immediately moves on to the next task (without waiting for the DB query to finish).

**Thread Pool**: The thread pool handles the blocking I/O operation (like the DB query) asynchronously.Once the I/O operation is finished, the callback (or result) is placed in the event queue.

**Event Loop (Again)**: The event loop picks up the callback from the event queue and places it onto the call stack.The callback is executed (e.g., returning the database query result) and the call stack is cleared.

**Response to Client**: Once the task is completed and the call stack is empty, the server sends the response back to the client.

```
        Client Request → Event Queue
                   |
                   v
       Event Loop -> Call Stack (executes synchronous tasks)
                   |
          If synchronous: 
                   | 
                   v
       Task completed -> Response sent to Client
                   |
         If asynchronous (I/O-bound):
                   |
                   v
         Offload to Thread Pool (e.g., DB query)
                   |
                   v
       Thread Pool completes task -> Callback in Event Queue
                   |
                   v
      Event Loop picks callback -> Call Stack
                   |
           Executes callback (e.g., process DB result)
                   |
                   v
       Task completed -> Response sent to Client
```

## Asynchronous Tasks Using the Thread Pool

* File System Operations: Reading/writing files (fs.readFile, fs.writeFile, etc.).
* Database Queries: Interacting with databases (e.g., MongoDB, MySQL, etc.).
* Compression/Decompression: Tasks like gzip compression (zlib).
* DNS Resolution: Resolving domain names using the DNS module.
* TLS/SSL Handshake: Secure communication setups.
* Child Processes: Executing shell commands or external scripts.

Refer to more detail:
[Link 1 - Digital Ocean](https://www.digitalocean.com/community/tutorials/node-js-architecture-single-threaded-event-loop)
[Link 2 - Dev.to](https://dev.to/trunghieu99tt/how-does-nodejs-handle-thousands-of-requests-while-its-single-thread-dcp)
[Link 3 - Medium Article](https://medium.com/@kumuthini.program/how-does-nodejs-handle-multiple-requests-97a2b094e762)
