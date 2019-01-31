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
