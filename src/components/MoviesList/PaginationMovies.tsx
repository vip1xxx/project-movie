import { Pagination, Stack } from '@mui/material';
import React, {FC} from 'react';
import {useAppDispatch} from "../../hooks/hooks";
import {getMoviesPage} from "../../store/slices/movies.slice";

import './MoviesList.css'

const PaginationMovies: FC = () => {

    let dispatch = useAppDispatch();

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(getMoviesPage(value))
    };

    return (
        <div className={'pagination'}>
            <Stack spacing={2}>
                <Pagination count={500} page={page} onChange={handleChange}/>
            </Stack>
        </div>
    );
};

export {PaginationMovies};