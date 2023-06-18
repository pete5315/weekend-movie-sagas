import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function MovieListItem({movie}) {
  const dispatch = useDispatch();
  function handleClick() {
    console.log('handleclick');
    dispatch({type: 'SET_DETAILS', payload: movie})
  }

return (
  <Grid item xs={4}>
  <Card key={movie.id} sx={{ margin: 3, justifyContent: 'center', padding: 3 }}>
      <Link to={`/details/${movie.id}`} onClick={() => handleClick()} >
        <img src={movie.poster} alt={movie.title} />
      </Link>
      <Typography gutterBottom variant="h6" component="div">
      {movie.title}
        </Typography>
  </Card>
  </Grid>
)
}

export default MovieListItem