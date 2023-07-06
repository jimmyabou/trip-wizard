# trip-wizard  
after pulling the repositry into your local git folder  
go to the client folder     
    $ npm install     //install all dependencies  

go to the server folder  
    $ npm install     //install all dependencies  

open two terminals one for the server and one for the client   
on each terminal run   
    $ npm start

to view the server side requests:
open browser and type:
    localhost:8080/users

to view client side open browser and use 
    localhost:3000/users   //this should display the users table objects returned by axios from the express server on Nodejs that is connected to PG database

I added a proxy in React pachakge.json file so you dont need to type the full addresss of the server : "proxy": "http://localhost:8080" when sending http requests

# Database setup:
make sure postgress SQL server is started 
from the terminal type
    $ psql
once you are in the PostgreSQL command-line interface (CLI) 
create the database on your local postgress
    # CREATE DATABASE final
username, password, and database name with the port are setup in the .env file //username :labber password:labber

finally on the server side terminal run the following command to create the tables and seed the database
    $ npm run db:reset    //you can run this command everytime you change anything in the table structure of want to add new seeds. this comand drops the tables and recreates all


