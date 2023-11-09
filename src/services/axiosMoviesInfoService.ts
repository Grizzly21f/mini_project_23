import {urls} from "../constant/baseURL";
import {IMovies} from "../interface/moviesinterface";
import {IRes} from "../types/IResType";
import {axiosService} from "./axiosService";


const axiosMoviesInfoServices = {
    getById: (id: string): IRes<IMovies> => axiosService.get(urls.byId(id)),

};

export { axiosMoviesInfoServices };