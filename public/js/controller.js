function lightOn(socket){
  $('.light-on').on('click', function(){
    socket.emit('light-on');
  });
}

function lightOff(socket){
  $('.light-off').on('click', function(){
    socket.emit('light-off');
  });
}

function lightBlink(socket){
  $('.light-blink').on('click', function(){
    socket.emit('light-blink');
  });
};

function lightStop(socket){
  $('.light-stop').on('click', function(){
    socket.emit('light-stop');
  });
}
