
import './App.css';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import searchIcon from './search.svg';
// 1600afe4
const API_URL = 'http://omdbapi.com/?apikey=1600afe4';
function App() {

  const searchMovie = async (title) => {


    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
   
   
  }

  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  useEffect(() => {
    searchMovie('Spiderman');
  }, []);
  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="Enter Movie Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchMovie(searchTerm);
            }
          }}
        />

        <img
          src="https://img.icons8.com/color/48/000000/search--v2.png"
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div >
  );
}

export default App;
