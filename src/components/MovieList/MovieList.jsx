// boilerplate to enable below functions
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// basic styling provided with assignment
import "./MovieList.css";
// reference to component returned below
import MovieListItem from "../MovieListItem/MovieListItem";
// MUI components used on this page
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function MovieList() {
  // enable dispatch
  const dispatch = useDispatch();
  // access the movies part of the store
  const movies = useSelector((store) => store.movies);

  // on page load effect
  useEffect(() => {
    // get the movies from the db/server
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <Box sx={{ flexGrow: 1 }}>
        {/* Grid enables relatively equivalent spacing */}
        <Grid container spacing={2}>
          <section className="movies">
            {/* map through the movies, each getting their own card */}
            {movies.map((movie, i) => {
              return <MovieListItem key={i} movie={movie} />;
            })}
          </section>
        </Grid>
      </Box>
    </main>
  );
}

export default MovieList;
