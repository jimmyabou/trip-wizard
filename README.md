# trip-wizard  
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
  


