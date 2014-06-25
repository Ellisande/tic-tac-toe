var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));
app.use('/static', express.static(__dirname + '/build'));

var server = app.listen(3000, function(){
  console.log('Listening on port 3000');
});

var board = {
  '1-1': '_',
  '1-2': '_',
  '1-3': '_',
  '2-1': '_',
  '2-2': '_',
  '2-3': '_',
  '3-1': '_',
  '3-2': '_',
  '3-3': '_',
  winner: null,
  changeMark: function(row, column){
    var coordinate = row+'-'+column;
    var currentMark = this[coordinate];
    if(currentMark == 'X') this[coordinate] = 'O';
    if(currentMark == 'O') this[coordinate] = '_';
    if(currentMark == '_') this[coordinate] = 'X';
  }
};

var io = require('socket.io')(server);

io.on('connection', function(socket){

});
