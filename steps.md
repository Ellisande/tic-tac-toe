# Steps for Building the Applicatoin

## 1 - Steaming CI

Gulp is going to be used for the CI solution. Gulp is designed with streaming CI in mind, so that's what we're going to set up.

### 1.1 Create Your Build Tasks

We want to do some standard build tasks with our Gulp project. Lets aggregate our JavaScript files, minify our CSS files, and concatenate them together into a single file.

* Create a task to aggregate the JavaScript files (maybe call it js-concat)
* Create a task to minify and aggregate the CSS (maybe call it cs-minify)

### 1.2 Create Your Reporting Tasks

We need some static analysis to make sure our code is in good shape.

* Create a task to run JSHint (maybe call it js-hint)
* Create a task to run CSSLint (maybe call it css-lint)

### 1.3 Make it Stream, Baby

The last step is to make this bad boy stream.

* Create a task called "watch"
* Create a gulp.watch function to watch the js files and run js-concat and js-hint
* Create a gulp.watch function to watch the css files and run css-lint and css-minify
* Add 'watch' to the default task

## 2 - Angular Front End

A basic angular application is already setup for you. Now we need to tailor it to our needs.

### 2.1 Create a Data Structure

We will need a JavaScript data structure to hold the tic-tac-toe board. There are a number of ways to accomplish this, and feel free to pick your favorite. My implementation will be using a board object.

* Create the board object
* Create a method that allows you to cycle through X, O and blank for each board coordinate
* Add some X's and O's so we can see the binding's in the next step
* In HomeCtrl add the new board object to the $scope variable as $scope.board

### 2.2 Bind the Data

Now that we have the data structure created we can use Angular to bind the data.

* In home.html change the X's to Angular binds for your board (e.g. {{board['1-1']}})

Thats it, do you see your X's and O's?

### 2.3 Bind a Click Events

Alright, so you've got the data bound, maybe there is a cool way to make them change on click? There isn't yet, but there sure will be!

* Add a new function in HomeCtrl that invokes the change method of your board
* Attach the function to the $scope variable as $scope.changeMark
* Add ng-click="changeMark(row, column)" to each of your divs

Now go click your divs! Does it change? I hope so!

### 2.4 Win the Game

Alright, the last thing to do is check if someone has won the game. You can do this a bunch of ways, but probably the best is to add some nice methods to your board object. Do this programmatically instead of in the declaration for fun and profit.

* Create a "getRows" method
* Create a "getColumns" method
* Create a "getDiagonals" method
* Loop through rows, check if there are all the same
* Loop through columns, check if they are all the same
* Loop through diagonals, check if they are all the same
* If they are the same set board.winner to "X" or "O"
* Create a new div in home.html that boards to board.winner to show show is winning.

## 3 - Multiplayer

We are now going toa dd multiplayer to the game, and we'll be using web sockets to do that. You may have noticed the server and the client are both consuming the socket.io framework. That will be the way we communicate.

### 3.1 Move the Board to the Server

We'll do this the cheap and easy way by simply declaring the board as a global variable on the server.

* Move the basic data structure code from the client to the server

### 3.2 Broadcast the Board

So now we have the board object on the server, how will it get to the UI? Socket magic!

* Create a socket.emit event that sends the event "board:update" with the board as data
* Create a socket.on('board:update') event on the client that sets $scope.board to the data in the event

### 3.3. Change the Change

Now its time to modify the changeMark method to interact with the server.

* After the mark gets changed fire a socket.emit('board:update') event to the server, with the current board state
* On the server create a socket.on('board:update') event that takes in the new board, then broadcasts its back to the other players

## 4 - Test (Optional)

Now we have a multiplayer tic-tac-toe game! Yeay! But does it really work? Lets find out!