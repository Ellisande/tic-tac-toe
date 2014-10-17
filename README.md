## Pre-Requisites

* Basic Javascript Knowledge
 * If you are new to JavaScript there are many online resources if you’d like to start learning. I personally like the beginner track on Code Academy http://www.codecademy.com/tracks/javascript
* Git: http://git-scm.com
 * If you aren’t familiar with Git try the tutorial at Github: (https://try.github.io/levels/1/challenges/1)
* Text Editor: Brackets and Atom both work well for this kind of development
 * Brackets (Windows/Mac): http://brackets.io
 * Atom (Mac Only): http://atom.io
* Node JS/NPM (Packaged together): http://nodejs.org

## Workstation Setup

* Clone the repo: ```git clone http://github.com/Ellisande/tic-tac-toe```
* Setup npm:
* Install global dependencies: __DO NOT COPY AND PASTE THESE COMMANDS__ there is an issue with the '-' character when copy and pasting
 * ```npm install –g gulp```
 * ```npm install -g nightwatch```
 * Mac Note: Mac users will need to run the global dependency installs with `sudo`
* Move to the project directory ```cd tic-tac-toe```
* Install dependencies: ```npm install```
* Run the app: ```gulp```
* Open the app: http://localhost:3000

## How to Navigate the Repository

The application is set up in a number of steps for each new thing to add. You can move forward or backward whenever you like. All the steps can be referenced from the steps.md file: https://github.com/Ellisande/tic-tac-toe/blob/master/steps.md

* Start from the beginning: ```git reset --hard start```
* Move to a specific step: ```git reset --hard 1.2```
 * Any step from steps.md is valid
* Reset your changes from the current step: ```git reset --hard {currentStep}```
* Move to the end ```git reset --hard end```
* Get the most recent code available ```git pull origin master```

## Framework Documentation

* Angular JS: https://angularjs.org/
* SocketIO: http://socket.io
* Gulp JS: http://gulpjs.com
* Node JS: http://nodejs.org
* Express JS: http://expressjs.com
