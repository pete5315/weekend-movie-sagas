import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
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
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* getDetails(action) {
  //get details for the current movie
  console.log(action.payload);
  fetchGenres(action.payload);
  try {
    console.log(action.payload);
    const details = yield axios.get(`/api/details/${action.payload.id}`);
    console.log("details", details);
    yield put({ type: "SET_DETAILS", payload: details.data });
  } catch {
    console.log("detail error");
  }
}

function* fetchGenres(movieID) {
  // get all genres from the DB for a movie
  console.log(movieID);
  try {
    const fetchedGenres = yield axios.get(`/api/genre/${movieID.payload.id}`);
    console.log("genres:", fetchedGenres.data);
    yield put({ type: "SET_GENRES", payload: fetchedGenres.data });
  } catch {
    console.log("get genres error");
  }
}

function* addMovie(newMovie) {
  // add a movie to the DB
  console.log(newMovie);
  try {
    yield axios.post(`/api/movie/`, newMovie);
    fetchAllMovies;
  } catch {
    console.log("get genres error");
  }
}

function* getGenreList() {
  // get all genres from the DB
  try {
    const genreList = yield axios.get(`/api/genre`);
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

// Used to store the movie genres
const genres = (state = [], action1) => {
  switch (action1.type) {
    case "SET_GENRES":
      console.log(action1.payload);
      return action1.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
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

// Used to store the movie genres
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
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
