import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";

export default function App() {

  const apiKey = "70ab6a0";

  //state to hold movie data
  const [movie, setMovie] = useState(null);

  //function to get movies
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  //list of movie titles
  const movieList = [
    "Clueless",
    "Inception",
    "The Matrix",
    "Avatar",
    "Titanic",
    "The Godfather",
    "Pulp Fiction",
    "The Dark Knight",
    "Forrest Gump",
    "The Shawshank Redemption"
  ];

  //fetch a random movie on initial load
  useEffect(() => {
    const randomMovie =
      movieList[Math.floor(Math.random() * movieList.length)];
    getMovie(randomMovie);
  }, []);




  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}