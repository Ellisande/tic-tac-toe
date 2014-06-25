function HomeCtrl($scope, socket){
  var board = {
    '1-1': 'X',
    '1-2': 'O',
    '1-3': ' ',
    '2-1': 'X',
    '2-2': 'O',
    '2-3': 'O',
    '3-1': 'O',
    '3-2': 'X',
    '3-3': ' ',
    changeMark: function(row, column){
      var coordinate = row+'-'+column;
      var currentMark = this[coordinate];
      if(currentMark == 'X') this[coordinate] = 'O';
      if(currentMark == 'O') this[coordinate] = ' ';
      if(currentMark == ' ') this[coordinate] = 'X';
    }
  };

  $scope.board = board;
}
