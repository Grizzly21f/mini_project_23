import {urls} from "../constant/baseURL";
import {IMovie} from "../interface/moviesinterface";
import {IRes} from "../types/IResType";
import {axiosService} from "./axiosService";


const axiosMoviesInfoServices = {
    getById: (id: string): IRes<IMovie> => axiosService.get(urls.byId(id)),

};

export { axiosMoviesInfoServices };