import { useDispatch } from "react-redux";
// Link will let us move between pages without a useHistory call
import { Link } from "react-router-dom";
// import your MUI elements
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// needed the movie prop from the map in MovieList.jsx
function MovieListItem({ movie }) {
  // activate dispatch
  const dispatch = useDispatch();

  // when a poster is clicked on, do this
  function handleClick() {
    // give the details saga the current movie to load
    dispatch({ type: "SET_DETAILS", payload: movie });
  }

  return (
    <Grid item xs={4}>
      <Card
        key={movie.id}
        sx={{ margin: 3, justifyContent: "center", padding: 3 }}
      >
        {/* link will let us move between pages without a history call */}
        <Link to={`/details/${movie.id}`} onClick={() => handleClick()}>
          <img src={movie.poster} alt={movie.title} />
        </Link>
        <Typography gutterBottom variant="h6" component="div">
          {movie.title}
        </Typography>
      </Card>
    </Grid>
  );
}

export default MovieListItem;
