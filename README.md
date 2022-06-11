# Node.js Note for Professionals Ebook Source Code

## Section 1.1 Hello World HTTP Server

- create an HTTP server listening on port 1337 which send `Hello World!` to the browser.
- The port number can be changed to any other port number.
- We can use the `http` module to create the server. The `http` module is a core module of Node.js (i.e we don't need to install additional resource).
- http module has the function `createServer` which create an HTTP server.

## Section 1.2: Hello World command line

- Node.js can be used to create command line utilities.
- The example created in hello-world-cmd-line branch reads the first argument from the command line and prints a Hello message.

## Section 1.3: Hello World with Express

- uses express to create an HTTP server listening on port 3000, which responds with "Hello World!".
- express is commonly used for creating HTTP APIs.

