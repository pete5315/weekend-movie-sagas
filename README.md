Description
Duration: Weekend sprint

This is my final weekend challenge assignment. I was tasked with creating a functional movie list app to practice using Saga and reducers. The goal was to have movie posters and names show on the movie list page, have the details including genre show up on a separate details page after you click on one of the posters, and to let the user add new movies on another separate page. The back end for this project needed to keep track of the movies as well as have a related table that included their genres.

Prerequisites
- [Node.js](https://nodejs.org/en/)
- [Material UI](https://mui.com/)
- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [ReactRedux](https://react-redux.js.org/)

Installation
1. Create a database named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

Usage
1. On pageload, the user will be greeted with a pre-populated list of movies. They will also see an add a movie button.
2. As they move their mouse around the page, they will see that the images are clickable.
3. If they click on one of posters, they will be taken to a details page that will include more information (description and genre information). They can then click on the return to list button to go back to the list.
4. At this point, they can continue exploring or click on the add movie button.
5. If they click on the add a movie button, it will take them to a page to add a movie. They will need to provide its title, poster URL, description, and choose a single genre from a dropdown list.
6. And that's it. Possibly in the future they will be able to delete movies, select multiple genres, edit the existing movies or even pull up just the movies of a specific genre. But for now, that's it :D

Built With
HTML
CSS
MUI
Node
React
Axios
PostgreSQL

Acknowledgement
Thanks to Prime Digital Academy for providing a practice ground on which to try out features. Thanks to Chris Black for helping me work through how to structure my architecture to take on the persistent details on reload stretch goal.