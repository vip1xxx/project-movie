import {FC} from "react";
import {useAppSelector} from "../../../hooks/hooks";
import {MoviesListCard} from "../../MoviesListCard/MoviesListCard";


const MoviesListByFilmNamePage: FC = () => {

    const {arrFilmsByName} = useAppSelector(state => state.movieReducer)

    return (
        <div className={'moviesList'}>
            {arrFilmsByName.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesListByFilmNamePage};