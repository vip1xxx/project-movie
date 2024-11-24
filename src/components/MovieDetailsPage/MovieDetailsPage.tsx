import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {FC, useEffect} from "react";

import './MovieDetailsPage.css'

import {getMovieDetails} from "../../store/slices/movies.slice";
import {baseUrlImg} from "../../constants";
import { Company } from "./Company/Company";




const MovieDetailsPage:FC = () => {

    const dispatch = useAppDispatch();
    const {movieDetails} = useAppSelector(state => state.movieReducer);


    const url = document.location.href
    const id = url.split('movie/')[1]


    useEffect(()=>{
        dispatch(getMovieDetails(parseInt(id)))
    },[id])

    const {
        original_title,
        release_date,
        vote_average,
        runtime,
        poster_path,
        overview,
        genres,
        production_companies
    } = movieDetails;

    return (
        <div className={'content-section'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'movie-info-box'}>
                        <div className={'movie-side-box'}>
                            <img src={`${baseUrlImg}${poster_path}`} alt={`${original_title}`}/>
                        </div>
                        <h3 className={'name'}>{original_title}</h3>
                        <div className={'features'}>
                            <div className={'rate'}>
                                <p>average rating: {vote_average}</p>
                                <img
                                    src="http://digiflex.themezinho.net/wp-content/themes/digiflex/images/imdb-logo.svg"
                                    alt="rate"/>
                                <p>Score</p>
                            </div>
                            <div className={'year'}>{release_date}</div>
                            <div className={'range'}>runtime: {runtime} min</div>
                            <div className={'category'}>{genres.map(genre => <p
                                key={genre.id}>{genre.name}</p>)}</div>
                        </div>
                        <p className={'description'}>
                            {overview}
                        </p>
                        <div className={'companies'}>
                            {<Company movieDetails={movieDetails}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export {MovieDetailsPage};