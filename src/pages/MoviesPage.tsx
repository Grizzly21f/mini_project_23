import React from 'react';
import css from './MoviesPage.module.css'

import {Movies} from "../components/Movies/Movies";


const MoviesPage = () => {
    return (
        <div className={css.bk}>
            <Movies/>
        </div>
    );
};

export {MoviesPage};
