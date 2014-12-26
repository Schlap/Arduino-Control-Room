var express = require('express');
var app = express();
var ejs = require('ejs');
var five = require('johnny-five');
var board = new five.Board();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

io.on('connection', function(socket){

  socket.on('light-on', function(){
    if (board.isReady) {var led = new five.Led(13);
    led.on()};
  });

  socket.on('light-off', function(){
    if(board.isReady){var led = new five.Led(13);
    led.off()};
  });

  socket.on('light-blink', function(){
    if(board.isReady){var led = new five.Led(13);
    led.blink(250)};
  });

  socket.on('light-strobe', function(){
    if(board.isReady){var led = new five.Led(13);
    led.strobe(1000)}
  });

  socket.on('key-light-on', function(){
    if(board.isReady){var led = new five.Led(13);
    led.on()};
  });

  socket.on('key-light-off', function(){
    if(board.isReady){var led = new five.Led(13);
    led.off()};
  });
});

server.listen(3000);
console.log("Listening to port: *3000");
console.log(board);

module.exports = app
