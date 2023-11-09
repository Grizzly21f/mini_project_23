
import React, { useEffect, useState } from 'react';
import { IGenre } from '../../interface/genresInterface';
import { axiosGenresService } from '../../services/axiosGenresService';
import Genre from './Genre/Genre';
import { useParams, Link } from 'react-router-dom';
import css from './Genres.module.css';
import { IMovie } from '../../interface/moviesinterface';


const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const { genreId } = useParams<{ genreId?: string }>();

    useEffect(() => {
        if (genreId !== undefined) {
            axiosGenresService.getMoviesByGenre(genreId).then(({ data }) => {
                // @ts-ignore
                if (data.results) {
                    // @ts-ignore
                    setMovies(data.results);
                    console.log('Movies for genreId', genreId, data);
                }
            });
        }
    }, [genreId]);

    useEffect(() => {
        axiosGenresService.getAll().then(({ data }) => {
            // @ts-ignore
            if (data.results) {
                // @ts-ignore
                setGenres(data.results);
            }
        });
    }, []);


    return (
        <div className={css.bk}>
            <div className={css.dd}>
                {genres && genres.map(genre => (
                    <Genre key={genre.id} genre={genre} />
                ))}
            </div>
            <div className={css.navmain}>
                <div className={css.nav}></div>
            </div>

            {movies.length > 0 && (
                <div className={css.movies}>
                    {movies && movies.map(movie => (
                        <div className={css.movie} key={movie.id}>
                            <Link to={`${movie.id}`}>
                                {movie.poster_path ? (
                                    <img className={css.imggxxx} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                ) : (
                                    <div>
                                        {movie.title}
                                    </div>
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export { Genres };



