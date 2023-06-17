import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function MovieListItem({movie}) {
  const dispatch = useDispatch();
  function handleClick() {
    console.log('handleclick');
    dispatch({type: 'SET_DETAILS', payload: movie})
    // dispatch({type: 'SET_GENRES', payload: movie})
  }

return (
  <div key={movie.id} >
      <h3>{movie.title}</h3>
      <Link to={`/details/${movie.id}`} onClick={() => handleClick()} >
        <img src={movie.poster} alt={movie.title} />
      </Link>
  </div>
)
}

export default MovieListItem