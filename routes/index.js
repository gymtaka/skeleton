var express = require('express')
  , http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);


app.get('/', function(req, res){
  res.render('index',
  { title: 'socket.io'  }
);
  });
/*
  io.on('connection', function(socket){
  console.log('a user connected');
  });
*/
/*  var count = 0;
  var countup = function(){
    console.log(count++);
  }
  setInterval(countup, 1000);
*/
io.on('connection', function(socket){
  console.log('いきてますか');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});


module.exports = app;
