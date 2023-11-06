import React, { useEffect, useState } from 'react';
import { IMovie } from "../../interface/moviesinterface";
import { axiosMoviesInfoServices } from "../../services/axiosMoviesInfoService";
import {MovieInfo} from "./MovieInfo";



const MoviesInfo = () => {
    const [moviesinfo, setMoviesinfo] = useState<IMovie[]>([]);

    useEffect(() => {
        axiosMoviesInfoServices.getById('id').then(({ data }) => setMoviesinfo(data.results));
    }, []);

    return (
        <div>
            {moviesinfo.map(movieinfo => <MovieInfo key={movieinfo.id} movieinfo={movieinfo} />)}
        </div>
    );
};

export { MoviesInfo };

