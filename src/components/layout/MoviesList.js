import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../dist/css/movies.css';
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const baseURL = "https://api.themoviedb.org/3";
const ApiKey = "2fa967a69389a800e8085bea51f70e82";
const allMovies = "/discover/movie";
const searchMovies = "/search/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/w500"
const MoviesList = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(1);
  const [total_pages, setTotalPages] = React.useState(1);

  async function fetchData(currentPage) {
   let url;
   let params;
    if (search) {
      url = baseURL + searchMovies;
      params = {
        api_key: ApiKey,
        page: currentPage,
        query: search
      }
    } else {
       url = baseURL + allMovies;
       params = {
        api_key: ApiKey,
        page: currentPage
      }
    }
    axios.get(url, {
      params: params })
        .then(response => {
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages)
        })
        .catch(error => {
          setError(error.response.data.message);
        })
  }

  useEffect(() => {
    fetchData(page)
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
    fetchData(value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    fetchData(page)
  }

  if (error)  {
    return <div className="error">
      <h2>{ error }</h2>
    </div>;
  } else if (movies) {

    const items = movies.map((movie, index) =>
        <div key={index} className="movieItem">
          <img src={imgBaseURL + movie.poster_path} alt={movie.title}/>
          <h2>{movie.title}</h2>
          {/*<p>{movie.overview}</p>*/}
          <Link className="more" to={"/movies/" + movie.id}>more...</Link>
        </div>
    );
    return (
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <label>Search:
              <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <input className="btn" type="submit" value="SEARCH" />
          </form>

          <Stack spacing={2}>
            <Pagination count={total_pages} page={page} onChange={handleChange} showFirstButton showLastButton />
          </Stack>

          <div className="movies">{ items }</div>
        </div>
    );
  }

}

export default MoviesList;
