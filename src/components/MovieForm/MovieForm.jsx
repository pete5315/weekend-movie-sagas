import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


function MovieForm() {


  return(
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
  </div>
    
  )
}

export default MovieForm;