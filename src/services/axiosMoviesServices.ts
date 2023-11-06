
import {urls} from "../constant/baseURL";
import {IMovies} from "../interface/moviesinterface"; // Assuming you need the "baseURL" from the constant file.
import {IRes} from "../types/IResType";
import {axiosService} from "./axiosService";

const axiosMoviesServices = {
    getAll:(page:string):IRes<IMovies> => axiosService.get(urls.movies,{params:{page}})// Use template literals to construct the URL.
};

export { axiosMoviesServices };

