import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

function MovieForm() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreList = ["Adventure"];//useSelector(store => store.movies);

  return (
    <div>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Movie Name</InputLabel>
        <Input id="component-simple" />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Poster URL</InputLabel>
        <Input id="component-simple" />
      </FormControl>
      <br></br>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Description</InputLabel>
        <OutlinedInput id="component-simple" />
      </FormControl>
      <FormControl sx={{ m: 1, width: 500 }}>
      <InputLabel>Multiple Select</InputLabel>
      <Select
        multiple
        value={selectedGenres}
        onChange={(e) => setSelectedGenres(e.target.value)}
        input={<OutlinedInput label="Multiple Select" />}
      >
        {genreList.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </div>
  );
}

export default MovieForm;
