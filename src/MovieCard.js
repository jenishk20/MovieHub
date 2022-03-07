import React from 'react';

const MovieCard = (props) => {
    const movie=props.movie;
    const {Title,Year,imdbID,Type,Poster}=movie;
   
    // const imdbID=movie.imdbID;
    // const Title=movie.Title;
    // const Poster=movie.Poster;
    // const Year=movie.Year;
    // const Type=movie.Type;
    // const plot=movie.Plot;
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;