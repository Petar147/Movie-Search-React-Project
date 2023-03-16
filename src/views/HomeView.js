import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Search from "../components/search/Search";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import Loading from "../components/Loading/Loading";
import { initialState, reducer } from "../reducer/Reducer";
import MoviesList from "../components/movies/MoviesList";
import { apiKey } from "../config/apiKey";
import { SEARCH_MOVIES_FAILED, SEARCH_MOVIES_SUCCESS } from "../reducer/types";
import API from "../config/api";


const HomeView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {movies, errorMessage, loading } = state;

  const handleMovieSearch = (movie) => {
      API.get(`?s=${movie}&${apiKey}`).then((res) => {
      console.log(res.data);
      if (res.data.Response === "True") {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: SEARCH_MOVIES_FAILED,
          payload: res.data.Error,
        });
      }
    });
  };

  useEffect(() => {
    handleMovieSearch("batman");
  }, []);

  return (
    <div>
      <h2>Home View</h2>
      <Search onSubmit={handleMovieSearch}/>
      <div>
        {loading && !errorMessage ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMsg>errorMessage</ErrorMsg>
        ) : (
          <MoviesList movies={movies}/>
        )}
        
        
        
      </div>
    </div>
  );
};
export default HomeView;
