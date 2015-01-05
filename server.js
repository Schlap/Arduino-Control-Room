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
    if (board.isReady) {var led = new five.Led(11);
    led.on()};
  });

  socket.on('light-off', function(){
    if(board.isReady){var led = new five.Led(11);
    led.off()};
  });

  socket.on('light-blink', function(){
    if(board.isReady){var led = new five.Led(11);
    led.blink(1000)};
  });

  socket.on('light-strobe', function(){
    if(board.isReady){var led = new five.Led(11);
    led.strobe(50);
    };
  });

  socket.on('light-fade', function(){
    if(board.isReady){var led = new five.Led(11);
    led.fadeIn();
      board.wait(5000, function(){
        led.fadeOut();
      })};
  });

  socket.on('light-brightness', function(){
    if(board.isReady){var led = new five.Led(11);
      led.brightness(128);
    };
  });

  socket.on('key-light-on', function(){
    if(board.isReady){var led = new five.Led(11);
    led.on()};
  });

  socket.on('key-light-off', function(){
    if(board.isReady){var led = new five.Led(11);
    led.off()};
  });
});

server.listen(3000);
console.log("Listening to port: *3000");
console.log(board);

module.exports = app
