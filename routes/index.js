var express = require('express');
var router = express.Router();
var http = require('http').Server(express);
var io = require('socket.io').listen(http);

router.get('/', function(req, res){
  res.render('index',
  { title: 'socket.io'  }
);
  });

  var io = require('socket.io').listen(http);
  io.on('connection', function(socket){
  console.log('a user connected');
  });

/*  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
  });
*/
/*  var count = 0;
  var countup = function(){
    console.log(count++);
  }
  setInterval(countup, 1000);
*/
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});


module.exports = router;
