## Pre-Requisites

* Basic Javascript Knowledge
 * If you are new to JavaScript there are many online resources if you’d like to start learning. I personally like the beginner track on Code Academy http://www.codecademy.com/tracks/javascript
* Git: https://olex-secure.openlogic.com/packages/git
 * If you aren’t familiar with Git try the tutorial at Github: (https://try.github.io/levels/1/challenges/1)
* Text Editor: Brackets and Atom both work well for this kind of development
 * Brackets (Windows/Mac): https://olex-secure.openlogic.com/packages/corporate/brackets
 * Atom (Mac Only): https://olex-secure.openlogic.com/packages/github_atom
* Node JS/NPM (Packaged together): https://olex-secure.openlogic.com/packages/node-js
* Selenium Server (Optional for testing): https://olex-secure.openlogic.com/packages/selenium-rc

## Workstation Setup

* Clone the repo: ```git clone https://gitlabsandbox.opr.test.statefarm.org/justin.dragos.m91s/tic-tac-toe.git```
* Setup npm:
 * __DO NOT JUST COPY AND PASTE THE BELOW__
 * Replace "alias" with your alias and "proxyPassword" with your proxy (SFNet) password
 * Set your proxy credentials for NPM: ```npm set proxy http://alias:proxyPassword@in00pxy1.opr.statefarm.org:8000```
* Install global dependencies:
 * ```npm install –g gulp```
 * ```npm install -g nightwatch```
* Install dependencies: ```npm install```
* Run the app: ```gulp```
* Open the app: http://localhost:5000
