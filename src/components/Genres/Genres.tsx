import React, {useEffect, useState} from 'react';
import {IGenre} from "../../interface/genresInterface";
import {axiosGenresService} from "../../services/axiosGenresService";
import Genre from "./Genre/Genre";



const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        axiosGenresService.getAll().then(({data}) => setGenres(data.genres))
    }, [])

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre} />)}
        </div>
    );
};

export {Genres};