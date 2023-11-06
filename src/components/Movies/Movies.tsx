import React, { useEffect, useState } from 'react';
import { IMovie } from "../../interface/moviesinterface";
import { axiosMoviesServices } from "../../services/axiosMoviesServices";
import Movie from './Movie/Movie';


const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        axiosMoviesServices.getAll('1').then(({ data }) => setMovies(data.results))
    }, [])

    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export  {Movies};
// {movies.map((movie, index) => (<div key={index}></div>))}