#Ember Independent Project: Tavern of Inquisition
####Ember JS Code Review for Epicodus, 04.01.2016

###by Michael Lor

##Description

This app is a message board that allows users to post questions to a page. Each question object carries an author, a question, and a note. Users are also able to edit the questions that have been entered. Users are also able to submit Answers to existing Questions.

The two models are Questions and Answers, where a single Question can have many Answers, employing dynamic routes to achieve the stated tasks.

##Setup

1) Clone repository to local drive.

2) Run the following commands from the command line under the root project folder

    brew install node

    npm install -g bower

    brew install watchman

    npm install -g ember-cli

    ember install emberfire

    ember build

    ember serve

3) The ember serve command makes the project now viewable at: http://localhost:4200


##Technologies Used
* Atom
* HTML
* Ember JS
* NPM
* NodeJS
* GitHub
* Bower
* Terminal
* Bootstrap

###License

Copyright (c) 2016 - This software is licensed under the MIT license
