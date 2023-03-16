import React from "react";
import MoviesListItem from "./MoviesListItem";

const MoviesList = ({ movies }) => {
  return <div>
    {movies.map(movies => {
        return <MoviesListItem key={movies.imdbId} movies={movies} />
    })}
  </div>;
};
export default MoviesList;
