import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import '../../dist/css/movie.css';
import React from "react";

const baseURL = "https://api.themoviedb.org/3/movie/"
const ApiKey = "2fa967a69389a800e8085bea51f70e82"
const imgBaseURL = "https://image.tmdb.org/t/p/original"

const Movie = () => {
    const params = useParams();
    const id = params.id;
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(baseURL + id, {
            params: {
                api_key: ApiKey
            }
        })
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                setError(error.response.data.message);
            })
    }, []);


    if (!movie) return null;

    return (
        <div className="single-movie">
            <img src={imgBaseURL + movie.poster_path} alt={movie.title}/>
                <div className="description">
                    <h2>{movie.title}</h2>
                    <div className="text">
                        <div className="vertical-border">
                            <span></span>
                        </div>
                        <div className="properties">
                            <p className="overview">{movie.overview}</p>
                            {/*<p>{movie.adult}</p>*/}
                            {/*<p>{movie.genre_ids}</p>*/}
                            <p><span>The budget of the movie: &#36;</span>{movie.budget}</p>
                            <p><span>Movie release date: </span>{movie.release_date}</p>
                            <p><span>Length of the movie: </span>{movie.runtime}<span className='minutes'> minutes</span></p>
                            <p><span>Movie rating: </span><span className="rating">{movie.vote_average}</span></p>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Movie;