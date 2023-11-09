//
// import {IGenre, IGenres} from "../interface/genresInterface";
// import {urls} from "../constant/baseURL";
// import {IRes} from "../types/IResType";
// import {axiosService} from "./axiosService";
// const axiosGenresService = {
//     getAll: (): IRes<IGenres<IGenre>> => axiosService.get(urls.genre),
//
// }
// export {
//     axiosGenresService
// };
import { IGenre, IGenres } from "../interface/genresInterface";
import { urls } from "../constant/baseURL";
import { IRes } from "../types/IResType";
import { axiosService } from "./axiosService";
import {IMovie} from "../interface/moviesinterface";

const axiosGenresService = {
    getAll: (): IRes<IGenres<IGenre>> => axiosService.get(urls.genre),

    getMoviesByGenre: (genre_ids: string): IRes<IMovie> => {
        const url = `genre/${genre_ids}/movies`;
        return axiosService.get(url);
    },
};

export { axiosGenresService };
