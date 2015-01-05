This is a simple javascript interface that sends information to an Arduino Uno micro-controller chip. You can signal the Arduino using a node server.

This project has taught me how to use web sockets (sockets.io) to stream information from client side to server side and vice versa.

It includes the Johnny-Five framework on the server-side for writing basic commands to an led. Jquery is used to capture the clients input, handles the event and triggers the corresponding action(server-side) assigned to it using sockets.io.

I really found this immensely pleasurable. Writing code to manipulate the real world was a bit if rush.

Tools used:

Testing:

* Mocha
* Chai(expect library)
* Zombie

Frameworks:

* Node.js
* Express
* Sockets.io
* EJS
* Johnny-Five

Languages:

* Javascript
