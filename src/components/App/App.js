import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Details from "../Details/Details"
import MovieForm from '../MovieForm/MovieForm'

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details/:id" >
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route exact path="/movieform">
          <MovieForm/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
