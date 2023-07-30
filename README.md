# trip-wizard  
Trip Wizard is a full-stack application we built to facilitate the finding, scheduling, and booking of activities for your next trip.

# Setup
after pulling the repositry into your local git folder  
go to the client folder     
    $ npm install       //install all dependencies  

go to the server folder  
    $ npm install       //install all dependencies  

open two terminals one for the server and one for the client   
on each terminal run   
    $ npm start

# Database setup:  
make sure postgress SQL server is started   
from the terminal type  
    $ psql  
once you are in the PostgreSQL command-line interface (CLI)   
create the database on your local postgress  
    # CREATE DATABASE final 
create a .env file in server and populate with your relative credentials and port to connect to your local database server similar to the .env.example file

finally on the server side terminal run the following command to create the tables and seed the database  
    $ npm run db:reset    
# Project Screenshots
### Home Page
![./screenshots/dashboard.png](https://github.com/jimmyabou/trip-wizard/blob/master/screenshots/home.png?raw=true)

### Search and filter
![search](https://github.com/jimmyabou/trip-wizard/blob/master/screenshots/serach.png?raw=true)
### Favorites Page
![favorites](https://github.com/jimmyabou/trip-wizard/blob/master/screenshots/favorites.png?raw=true)

### Details Modal
![Modal](https://github.com/jimmyabou/trip-wizard/blob/master/screenshots/modal_home.png?raw=true)
### Custom Package Page
![Package](https://github.com/jimmyabou/trip-wizard/blob/master/screenshots/create_packages.png?raw=true)
### Add Day to Package
![Add_day](https://github.com/jimmyabou/trip-wizard/assets/128553101/c9d89963-7326-4abb-8d8a-cbc78d20cf4d)
### Add Attractions to Day
![Add_attractions](https://github.com/jimmyabou/trip-wizard/blob/master/screenshots/select_attraction_modal.png?raw=true)
### Full Comprehensive Itinerary
![itinerary](https://github.com/jimmyabou/trip-wizard/blob/master/screenshots/itinerary.png?raw=true)


