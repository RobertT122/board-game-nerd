# README

## BoardGameNerd is Live [here](https://board-game-nerd.herokuapp.com/#/)

BoardGameNerd is a clone of the popular website [BoardGameGeek](https://boardgamegeek.com).

## Overview:

The purpose of this site is offer the user an easy and interactive way to see the most popular games out right now.
In BoardGameNerd you can explore a ranked list of board games sorted by user reviews. A user can visit the site and see relevant information on the games they are interested in, as well as make reviews and view other users comments and ratings. Your changes will dynamically alter the average review of the game and its ranked position of all games on the site. 

## Technologies:
This full stack aplication is built using :
* Ruby on Rails as the backend API controller and provides the MVC framework
* Postgres for the database
* React and Redux for front end navigatein and architecture

#Features: 

* The app features fully functional and encrypted user authentication using 
  * BCrypt for password hashing
  * Session Cookies for tracking current user sessions
  * interactive login with error management

* This app also contains a fully interactive reviewing and commenting system that
  * Has fully functional CRUD operations
  * Autofills forms using information on the current user
  * Dynamically changes the average rating of a game and its position on the overall rankings
