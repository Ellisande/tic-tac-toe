var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));
app.use('/static', express.static(__dirname + '/build'));

var server = app.listen(3000, function(){
  console.log('Listening on port 3000');
});

var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('Client connected');
})
