import {axiosService} from "./axios.service";
import {IGenre} from "../interfaces";
import { urls } from "../constants";

export const genresService = {
    getAll: ()=>axiosService.get<{genres: IGenre[]}>(urls.genres).then(value => value.data.genres)
}