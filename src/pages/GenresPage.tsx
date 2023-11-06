import React from 'react';
import {Genres} from "../components/Genres/Genres";
import css from "./GenresPage.module.css";

const GenresPage = () => {
    return (
        <div className={css.bk}>
<Genres/>
        </div>
    );
};

export  {GenresPage};