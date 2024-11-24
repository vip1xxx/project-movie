import {apiKey, urls} from "../constants";
import {axiosService} from "./axios.service";
import {IMovie, IMovieDetails} from "../interfaces";


export const movieService = {

    getAll: (page: number) =>
        axiosService.get<{ results: IMovie[] }>(`${urls.movies}?api_key=${apiKey}&page=${page}`)
            .then(value => value.data.results),

    getById: (id: number) => axiosService.get<IMovieDetails>(`/movie/${id}?api_key=${apiKey}`),


    getMoviesByName: (page: number, name: string) =>
        axiosService.get<{ results: IMovie[] }>(`/search/movie?api_key=${apiKey}&query=${name}&page${page}`)
            .then(value => value.data.results)
}