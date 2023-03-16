import React from "react";

const defaultImage = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";


const MoviesListItem = ({movies}) => {
    const poster = movies.Poster === "N/A" ? defaultImage : movies.Poster;

  return <div>
    <h2>{movies.Title}</h2>
    <div>
        <img src={poster}
        width='220'
        height='300'
        alt={movies.Title}/>
    </div>
  </div>;
};
export default MoviesListItem;