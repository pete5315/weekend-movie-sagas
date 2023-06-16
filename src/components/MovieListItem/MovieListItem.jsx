
function MovieListItem({movie}) {
  
  function handleClick() {

  }

return (
  <div key={movie.id} >
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} onClick={() => handleClick}/>
  </div>
)
}

export default MovieListItem