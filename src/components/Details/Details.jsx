// lots of boilerplate on this one
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// WAY TOO MUCH MUI, GOOD LUCK TO US
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

function Details() {
  // gonna need dispatch below
  const dispatch = useDispatch();
  // this gives us the id of the current movie
  const movieID = useParams();

  // need to update the details and genres on page load
  useEffect(() => {
    dispatch({
      type: "GET_DETAILS",
      payload: movieID,
    });
    dispatch({
      type: "FETCH_GENRES",
      payload: movieID,
    });
  }, [movieID]);

  // here's our store items
  const details = useSelector((store) => store.details[0]);
  const genres = useSelector((store) => store.genres);

  // prevent some potential page load errors
  if (!details) {
    return;
  }
  if (!genres) {
    return;
  }

  return (
    <Container
      sx={{ alignItems: "center", display: "flex", alignContent: "center" }}
    >
      <Card sx={{ width: 450, margin: 3, justifyContent: "center" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {details.title}
          </Typography>
          <img src={details.poster} alt={details.title} />
          <List>
            <ListSubheader>Genres:</ListSubheader>
            {/* this probably won't break unless there are no genres for a movie */}
            {genres.map((genre, i) => (
              <ListItem key={i}>
                <ListItemText primary={genre.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions>
          {/* link lets us move between pages without a history call */}
          <Link to="/">
            <Button>Return to list</Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}

export default Details;
