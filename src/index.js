// import react
import React from "react";
import ReactDOM from "react-dom/client";
// basic formatting provided with assignment
import "./index.css";
// import app where the initial routes will live
import App from "./components/App/App.js";
// store and combine reducers will make our variables and sagas available in every component
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { takeEvery, put } from "redux-saga/effects";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
//import axios for server requests
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("GET_DETAILS", getDetails);
  yield takeEvery("FETCH_GENRES", fetchGenres);
  yield takeEvery("ADD_MOVIE", addMovie);
  yield takeEvery("GET_GENRELIST", getGenreList);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    // axios call for all movies
    const movies = yield axios.get("/api/movie");
    // send the movies to the store
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* getDetails(action) {
  // need genres for the current movie
  fetchGenres(action.payload);
  // get details for the current movie
  try {
    // axios call for specific details of one movie
    const details = yield axios.get(`/api/details/${action.payload.id}`);
    // send the details to the store
    yield put({ type: "SET_DETAILS", payload: details.data });
  } catch {
    console.log("detail error");
  }
}

function* fetchGenres(movieID) {
  // get all genres from the DB for a movie
  try {
    // axios call for the genres of one specific movie
    const fetchedGenres = yield axios.get(`/api/genre/${movieID.payload.id}`);
    // send the genres for that movie to the store
    yield put({ type: "SET_GENRES", payload: fetchedGenres.data });
  } catch {
    console.log("get genres error");
  }
}

function* addMovie(newMovie) {
  // add a movie to the DB
  console.log(newMovie);
  try {
    // send the movie to the DB
    yield axios.post(`/api/movie/`, newMovie);
    // update the store with the new movie
    fetchAllMovies;
  } catch {
    console.log("get genres error");
  }
}

function* getGenreList() {
  // get all genres from the DB
  try {
    // axios call for the list of genres in the DB
    const genreList = yield axios.get(`/api/genre`);
    // send the genre list to the store
    yield put({ type: "SET_GENRELIST", payload: genreList.data });
  } catch {
    console.log("get genres error");
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie details
const details = (state = [], action2) => {
  console.log(action2);
  switch (action2.type) {
    case "SET_DETAILS":
      console.log(action2);
      return action2.payload;
    default:
      return state;
  }
};

// Used to store the movie genres for the details movie
const genres = (state = [], action1) => {
  switch (action1.type) {
    case "SET_GENRES":
      console.log(action1.payload);
      return action1.payload;
    default:
      return state;
  }
};

// Used to store all of the movie genres
const genreList = (state = [], action3) => {
  console.log(action3);
  switch (action3.type) {
    case "SET_GENRELIST":
      console.log(action3);
      return action3.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const store = createStore(
  combineReducers({
    movies,
    genres,
    details,
    genreList,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* make the store available to the components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
