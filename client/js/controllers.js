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
    winner: null,
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

  board.getRows = function(){
    var row1 = [ this['1-1'], this['1-2'], this['1-3'] ];
    var row2 = [ this['2-1'], this['2-2'], this['2-3'] ];
    var row3 = [ this['3-1'], this['3-2'], this['3-3'] ];
    return [row1, row2, row3];
  }

  board.getColumns = function(){
    var column1 = [ this['1-1'], this['2-1'], this['3-1'] ];
    var column2 = [ this['1-2'], this['2-2'], this['3-2'] ];
    var column3 = [ this['1-3'], this['2-3'], this['3-3'] ];
    return [column1, column2, column3];
  }

  board.getDiagonals = function(){
    var diagonal1 = [ this['1-1'], this['2-2'], this['3-3'] ];
    var diagonal2 = [ this['1-3'], this['2-2'], this['3-1'] ];
    return [diagonal1, diagonal2];
  }

  var getWinner = function(markerSet){
    if(markerSet[0] == markerSet[1] && markerSet[1] == markerSet[2] && markerSet[2] == 'X') {
      return 'X';
    }
    if(markerSet[0] == markerSet[1] && markerSet[1] == markerSet[2] && markerSet[2] == 'O') {
      return 'O';
    }
    return null;
  };


  $scope.$watch('board', function(){
    var rows = board.getRows();
    var rowWinner = rows.some(function(row){
      var winner = getWinner(row);
      if(winner){
        board.winner = winner;
        return true;
      }
    });

    var columns = board.getColumns();
    var columnWinner = columns.some(function(column){
      var winner = getWinner(column);
      if(winner){
        board.winner = winner;
        return true;
      }
    });

    var diagonals = board.getDiagonals();
    var diagonalWinner = diagonals.some(function(diagonal){
      var winner = getWinner(diagonal);
      if(winner){
        board.winner = winner;
        return true;
      }
    });

    if(!rowWinner && !columnWinner && !diagonalWinner) board.winner = null;
  }, true);
}
