var express = require('express');
var router = express.Router();
var http = require('http').Server(express);
var io = require('socket.io').listen(server);

router.get('/', function(req, res){
  res.render('index',
  { title: 'socket.io'  }
);
  });

  io.on('connection', function(socket){
  console.log('a user connected');
  });

/*  var count = 0;
  var countup = function(){
    console.log(count++);
  }
  setInterval(countup, 1000);
*/
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});



module.exports = router;
