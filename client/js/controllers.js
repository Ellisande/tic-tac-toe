function HomeCtrl($scope, socket){
  var board = {
    '1-1': 'X',
    '1-2': '_',
    '1-3': 'X',
    '2-1': 'X',
    '2-2': 'O',
    '2-3': 'O',
    '3-1': 'O',
    '3-2': 'X',
    '3-3': '_',
    changeMark: function(row, column){
      var coordinate = row+'-'+column;
      var currentMark = this[coordinate];
      if(currentMark == 'X') this[coordinate] = 'O';
      if(currentMark == 'O') this[coordinate] = '_';
      if(currentMark == '_') this[coordinate] = 'X';
    }
  };

  $scope.board = board;

  $scope.changeMarker = function(row, column){
    board.changeMark(row, column);
  };
}
