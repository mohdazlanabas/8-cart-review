# BACKEND

## SETUP

MONGODB

String, Nested Document, Array, Integer, Go-Spatial Coordiante

Open MongoDb Account
Based on tiering
Setup Database

Get Connecton String
Copy to use as API in APP

## INSTALL PACKAGES

verify node version
npx create-react-app <name-of-project>
cd into directory

install packages
cors, dotenv, express, mongoDB

## MAIN SECTION

SERVER.JS
import express, cors, mongoose
get uri from Atlas

DOTENV
store uri from Altas

INDEX.JS
import server.js
import mongoDB
import dotenv
import restaurantDAO
connect to mongodb database
check error
connect to server

==================================

## DAO

CREATE DAO- Data Access Objects

RESTAURANT DAO (METHOD)

- inject mongoDB - if connected return ELSE await for connection get query from MongoDB Restaurants
- Get Restaurant
- Get Restaurants By ID
- Get By Cuisine

REVIEWS DAO

- inject DB
- Add Review
- Update Review
- Delete Review

=============================

## API

API

- create route
  import express

RESTAURANT ROUTE

- Express
- Restaurant Controller- Restaurant, ID, Cuisine
- Reviews Controller
- GET
- POST
- PUT
- DELETE

RESTAURANT CONTROLLER (METHOD)

- Import RestaurantDAO
- Export RestaurantDAO
- Get Restaurant By Name
- Get Restaurant By Id
- Get By Cuisine

REVIEW CONTROLLER (METHOD)

- Post Review- RestaurantID, UserInfo, Text, Date
- Put-Update Review- ReviewID, Text, Date
- Delete Review- ReviewID, USerID

# FRONTEND

## Install Dependencies

- Bootstrap, React-Router-Dom, Axios

## index.js

- Import all dependencies
- Import Browser Router

## Services Folder

- restaurants.js
- Use Axios to manage API- get, post, put, delete
- function for API calls
- link to backend via http address or /pages

## App.js

- Main Page
- Import components files in
- paste bootstrap nav bar codes
- link to /restaurant-reviews, /restaurants, /login/logout

## Create Component Folder

- restaurants-list.js
  - search pages
  - retreiving info
- restaurants.js
  - restaurant page
  - going into each restaurants
  - add, edit, review
- add-reviews.js
  - restaurant review page
  - add reviews
  - edit reviews
  - delete reviews
- login.js
  - check log in
  - use to macth review to edit, delete

