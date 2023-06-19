import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieListItem from "../MovieListItem/MovieListItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <section className="movies">
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
