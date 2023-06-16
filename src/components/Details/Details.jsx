import { HashRouter as Router, Route } from "react-router-dom";

function Details({movie}) {
  console.log(movie.key);
  return (
    <div key={(movie.key+2)*100}>
      <Route exact path="/{movie.id}" >
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title} />
      </Route>
    </div>
  );
}

export default Details;
