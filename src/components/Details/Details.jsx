import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


function Details() {
  const dispatch = useDispatch();
  const movieID = useParams();
  useEffect(() => {
    console.log(movieID);
    dispatch({
      type: "GET_DETAILS",
      payload: movieID,
    });
    dispatch({
      type: "FETCH_GENRES",
      payload: movieID,
    });
  }, [movieID]);
  const details = useSelector((store) => store.details[0]);
  const genres = useSelector((store) => store.genres);
  if (!details) {
    console.log(22);
    return
  }
  if (!genres) {
    return 
  }
  console.log(genres)
  return (
    <Container sx={{  alignItems: "center", display: "flex", alignContent: "center"  }}>
    <Card        sx={{ height: 600, width: 600, margin: 3, justifyContent: 'center' }}
>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {details.title}
        </Typography>

      <img src={details.poster} alt={details.title} />
      <List>
      <ListSubheader>
          Genres:
      </ListSubheader>
      {genres.map((genre, i) => (
          <ListItem disablePadding>
              <ListItemText key={i} primary={genre.name} />
          </ListItem>
        ))}
        </List>
      </CardContent>
      <CardActions>
      <Link to="/"  >
        <Button>Return to list</Button>
      </Link>
      </CardActions>
    </Card>
    </Container>
  );
}

export default Details;
