# Steps for Building the Applicatoin

## 1 - Steaming CI

Gulp is going to be used for the CI solution. Gulp is designed with streaming CI in mind, so that's what we're going to set up.

You can find examples of how to set things up at the Gulp website: http://gulpjs.com

### 1.1 Create Your Build Tasks

We want to do some standard build tasks with our Gulp project. Lets aggregate our JavaScript files, minify our CSS files, and concatenate them together into a single file.

* Create a task to aggregate the JavaScript files (maybe call it js-concat)
* Create a task to minify and aggregate the CSS (maybe call it cs-minify)
* Ensure that the built versions of the files are named 'app.js' and 'app.css'. Have them output to the 'build' directory.

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

You should now see gulp minify, concat, and lint your files immediately on save.

## 2 - Angular Front End

A basic angular application is already setup for you. Now we need to tailor it to our needs.

Examples and documentation about Angular can be found at: http://angularjs.org

Note: The application is expecting the your files to be built and put in the "build" directory to run. If you have not set this up correctly with gulp you will not see anything when you attempt to load the application.

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

### 2.3 Bind Click Events

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

Ensure you have both Nightwatch and the selenium standalone JAR available. See README.md if you need help getting those dependencies.

### 4.1 Configure Nightwatch

We need to configure nightwatch to run our tests. Nightwatchjs.org has information on how to do this, but feel free just to steal the one provided for quick startiness.

* Create a nightwatch.json file in the main directory: https://gitlabsandbox.opr.test.statefarm.org/justin.dragos.m91s/tic-tac-toe/blob/master/nightwatch.json
* Create a nightwatch.js file in the main directory:https://gitlabsandbox.opr.test.statefarm.org/justin.dragos.m91s/tic-tac-toe/blob/master/nightwatch.js

### 4.2 Create a Test for Clicky Marks

Let's right our first test! How about we make sure that clicking on the marks changes them? I'm glad you agree, because you don't have a choice!

* You may want to add an easy way to select individual cells (e.g. an id or a class)
* Create a test directory in the main directory
* Create a file called markChanges.js inside that directory
* Once you have a simple way to select your grid squares create a simple test that clicks on them
* Instructions for making a simple test can be found at http://nightwatchjs.org/guide#usage

### 4.3 Create a test for Winning

Now that you've made your first test, its time to step up your game. Create a test that asserts the winning functionality works.

* You may want to an easy way to select the winning div
* Create a test that changes an entire row, column, and/or diagonals to X and/or O
* Assert that the correct winning message shows up

## 5 Go Outside

... and get some air! You've completed a whole app in all javascript. You are the champion, my friend. Congrulations!

### 5.1 Still Here?

If you are still working on this, here are some ideas on what you could do next.

* Create "rooms" that people can join to play tic-tac-toe one-on-one
* Allow the user to select if they are X's or O's
* Write computer AI to play against the player
* Create a speed game where people can change any box they want and have to try and keep up with the other player to win
* Create tests for every possible combination of moves
