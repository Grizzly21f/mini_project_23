import { NavLink } from "react-router-dom";
import React from 'react';

import css from './Header.module.css';

const Header = () => {



    return (
        <div className={css.header}>
            <div className={css.logo}>The MovieDB</div>
            <div>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
                <button >Change Theme</button>
            </div>
            <div className={css.user}>
                <img src="https://i.pinimg.com/564x/06/82/1a/06821a14a9b07af54ec3f29783b73e98.jpg" alt="user"/>
            </div>
        </div>
    );
};

export { Header };
