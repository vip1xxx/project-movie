import {FC} from "react";
import {Link} from "react-router-dom";

import { baseUrlImg } from "../../constants";
import {IMovie} from "../../interfaces";

import './MovieListCard.css'


const MoviesListCard: FC<{ movie: IMovie }> = ({movie}) => {
    const {title, id, poster_path, vote_average, release_date, overview, } = movie

    return (
        <div className={'card'}>
            <Link to={`/movie/${movie.id.toString()}`}>
                <img src={baseUrlImg+poster_path} alt={title}/>
                <div className={'cardTitle'}>
                    <h2>{title}</h2>
                </div>
            </Link>
            <div className={'rating'}>
                <h3>Rating: {vote_average}</h3>
                <span>Release Data: {release_date}</span>
            </div>
        </div>
    );
};

export {MoviesListCard};