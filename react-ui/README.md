![alt text](https://github.com/jendigital/yossmoviequizz-reactjs/blob/master/yoss.png)

Yoss movie quizz project 
========================

## Movie Quizz Instructions : Did the actor play in the movie? 

https://gist.github.com/nicolaschenet/cd9fe5c0b93a1a44e44a8803deb95b94

![alt text](https://github.com/jendigital/yossmoviequizz-reactjs/blob/master/yossmoviequizz_instructions1.png)

![alt text](https://github.com/jendigital/yossmoviequizz-reactjs/blob/master/yossmoviequizz_instructions2.png)

![alt text](https://github.com/jendigital/yossmoviequizz-reactjs/blob/master/yossmoviequizz_instructions3.png)

## Movie Api URL & Doc 

https://api.themoviedb.org/ & https://www.themoviedb.org/documentation/api

![alt text](https://github.com/jendigital/yossmoviequizz-reactjs/blob/master/movielist.png)

##Step of development 

1. Having create a playmode with a simple boolean play state 
2. Set Timer and score in a header stateless component
3. Set a stateless component which display an actor and a movie poster and test it with a picture
4. Fetch movies and actors for the quizz
5. As there is only 20 results per page and we wanna play on most popular actors and movies, i choose to work with the 10 first page
6. Create a function which give a 0(false) or 1(true) ramdomly to set the right answer
7. Notify player if he wins or lose
8. Create player name form
9. Create highscores board
10. Reset scores
11. No use of any bdd, didn't have time to use locale storage
12. Some code could have been optimised

![alt text](https://github.com/jendigital/yossmoviequizz-reactjs/blob/master/game.png)

## Heroku App

Can be deployed on heroku

## Launch React Front

* yarn start
* see result on http://localhost:3000
* yarn test to launch jest test
* create-react-app-sass project

## Launch Server (Optionnal on localhost Indispensable for Heroku)

* yarn start
* see result on http://localhost:5000

## Deploy on Heroku from Root (Preproduction plateforme)

* Install the Heroku CLI
* Download and install the Heroku CLI.

## If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
* Create a new Git repository
* Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a reactjsprojectname

* Deploy your application
* Commit your code to the repository and deploy it to Heroku using Git.
$ git add .
$ git commit -am "make it better"
$ git push heroku master
OR
$ git push heroku branchname:master

* Existing Git repository
* For existing repositories, simply add the heroku remote
$ heroku git:remote -a reactjsprojectname
