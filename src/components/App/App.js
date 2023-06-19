// need routes to only show one part of the app at a time
import { HashRouter as Router, Route } from "react-router-dom";
// basic styling provided with the assignment
import "./App.css";
// need these to have stuff show up on load
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// references to other components that get called in the return
import Details from "../Details/Details";
import MovieForm from "../MovieForm/MovieForm";
import MovieList from "../MovieList/MovieList";

function App() {
  // boilerplate to enable the dispatch below
  const dispatch = useDispatch();

  useEffect(() => {
    // get the movies from the index/db
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <div className="App">
      {/* header shows on all pages */}
      <h1>The Movies Saga!</h1>
      <Router>
        {/* only want the movies to show when you're on the homepage */}
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details/:id">
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route exact path="/movieform">
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
