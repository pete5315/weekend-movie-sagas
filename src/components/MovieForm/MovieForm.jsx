import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/";

function MovieForm() {
  let dispatch = useDispatch();
  const genreList = useSelector((store) => store.genreList);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [newTitle, setNewTitle] = useState([]);
  const [newURL, setNewURL] = useState([]);
  const [newDescription, setNewDescription] = useState([]);
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: "GET_GENRELIST" });
  }, []);

  function handleClick() {
    let newMovie = {
      title: newTitle,
      poster: newURL,
      description: newDescription,
      genre_id: selectedGenres[0],
    };
    for (let trait in newMovie) {
      if (newMovie[trait]) {
        if (newMovie[trait].length === 0) {
          console.log(40);
          alert("Please complete all fields");
          return;
        }
      } else if (newMovie[trait] === undefined) {
        alert("Please complete all fields");
        return;
      }
    }
    console.log("add movie");
    dispatch({
      type: "ADD_MOVIE",
      payload: newMovie,
    });
    history.push("/");
  }

  return (
    <div>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Movie Name</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </FormControl>
      <br></br>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Poster URL</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => setNewURL(e.target.value)}
        />
      </FormControl>
      <br></br>
      <FormControl variant="standard">
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </FormControl>
      <br></br>
      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel>Multiple Select</InputLabel>
        <Select
          multiple
          value={selectedGenres}
          onChange={(e) => setSelectedGenres(e.target.value)}
          input={<OutlinedInput label="Multiple Select" />}
        >
          {genreList.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br></br>
      <Link to="/">
        <Button variant="contained">Cancel</Button>
      </Link>
      <Button variant="contained" onClick={handleClick}>
        Add movie
      </Button>
    </div>
  );
}

export default MovieForm;
