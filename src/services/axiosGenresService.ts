
import {IGenre, IGenres} from "../interface/genresInterface";
import {urls} from "../constant/baseURL";
import {IRes} from "../types/IResType";
import {axiosService} from "./axiosService";
const axiosGenresService = {
    getAll: (): IRes<IGenres<IGenre>> => axiosService.get(urls.genre),
}
export {
    axiosGenresService
};