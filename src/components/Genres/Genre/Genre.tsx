import React, {FC} from 'react';
import {IGenre} from "../../../interface/genresInterface";

interface IProps {
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
const {name}= genre

    return (
        <div>

            <div>{name}</div>
        </div>
    );
};

export default Genre;