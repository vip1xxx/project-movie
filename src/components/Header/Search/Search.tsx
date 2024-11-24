import {createRef, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {useNavigate} from "react-router-dom";
import {getMoviesByName} from "../../../store/slices/movies.slice";

import '../Header.css'

const Search = () => {

    const filmName = createRef<any>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {moviesPage} = useAppSelector(state => state.movieReducer)
    const [name, setName] = useState<string>('')

    const send = (e: any) => {
        e.preventDefault();
        if (filmName.current.value != '') {
            setName(filmName.current.value.toLowerCase());
            navigate('byFilmName')
        }
    }

    useEffect(() => {
        if (name !== '') {
            dispatch(getMoviesByName({name: name, page: moviesPage}))
        }
    }, [name, moviesPage])

    return (
        <form onSubmit={send}>
            <div className='search'>
                <input type="text" name={'filmName'} ref={filmName}/>
                <button>
                    Search
                </button>
            </div>
        </form>
    );
};

export {Search};