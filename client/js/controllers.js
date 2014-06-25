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

  board.getRows = function(){
    var row1 = [ this['1-1'], this['1-2'], this['1-3'] ];
    var row2 = [ this['2-1'], this['2-2'], this['2-3'] ];
    var row3 = [ this['3-1'], this['3-2'], this['3-3'] ];
    return [row1, row2, row3];
  }

  board.getColumns = function(){
    var column1 = [ this['1-1'], this['2-1'], this['3-1'] ];
    var column2 = [ this['1-2'], this['2-2'], this['3-2'] ];
    var column1 = [ this['1-3'], this['2-3'], this['3-3'] ];
    return [column1, column2, column3];
  }

  board.getDiagonals = function(){
    return diagonal1 = [ this['1-1'], this['2-2'], this['3-3'] ];
    return diagonal2 = [ this['1-3'], this['2-2'], this['3-1'] ];
    return [diagonal1, diagonal2];
  }


}
