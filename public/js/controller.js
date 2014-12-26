function lightOn(socket){
  $('.light-on').on('click', function(){
    socket.emit('light-on');
  });
};

function lightOff(socket){
  $('.light-off').on('click', function(){
    socket.emit('light-off');
  });
};

function lightBlink(socket){
  $('.light-blink').on('click', function(){
    socket.emit('light-blink');
  });
};

function lightStrobe(socket){
  $('.light-strobe').on('click', function(){
    socket.emit('light-strobe');
  });
};

function lightPulse(socket){
  $('.light-pulse').on('click', function (){
    socket.emit('light-pulse');
  });
};

function keyLightOn(socket){
  $(document).keypress(function(e){
    if(e.which == 119){
      socket.emit('key-light-on');
      console.log('key light on')
    };
  });
};

function keyLightOff(socket){
  $(document).keypress(function(e){
    if(e.which == 101){
      socket.emit('key-light-off');
      console.log('key light off');
    };
  });
}
