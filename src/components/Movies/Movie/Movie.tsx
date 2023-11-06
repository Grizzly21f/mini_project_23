import React, {FC} from 'react';
import {IMovie} from "../../../interface/moviesinterface";
import {AppPagination} from "./AppPagination";

interface IProps {
    movie:IMovie
    total_pages: number;
}
const Movie:FC<IProps> = ({movie,total_pages}) => {
    const moviePoster = movie?.poster_path;
    return (
        <div >

            {
                moviePoster ?

                    <img src={`https://image.tmdb.org/t/p/w500${moviePoster}`} alt={movie.title}/>:
                    <div>
                        {movie.title}
                    </div>
            }
            <AppPagination total_pages={total_pages} />
        </div>
    );
};

export default Movie;
