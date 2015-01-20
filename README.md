This is a simple javascript interface that sends information to an Arduino Uno micro-controller chip. You can signal the Arduino using a node server.

This project has taught me how to use web sockets (sockets.io) to stream information from client side to server side and vice versa.

It includes the Johnny-Five framework on the server-side for writing basic commands to an led. Jquery is used to capture the clients input, handles the event and triggers the corresponding action(server-side) assigned to it using sockets.io.

I really found this immensely pleasurable. Writing code to manipulate the real world was a bit if rush.

==Testing:

* Mocha
* Chai(expect library)
* Zombie

==Frameworks:

* Node.js
* Express
* Sockets.io
* EJS
* Johnny-Five

==Languages:

* Javascript

==How to use:

- clone this repo and cd inside it
- run node server.js
- go to local host 3000
- plug in an Arduino Uno and load up standard firmata
- place an led on pin 11
- start pressing buttons!
