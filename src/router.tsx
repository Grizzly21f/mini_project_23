import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {MovieinfoPage ,MoviesPage, SearchPage ,GenresPage} from "./pages";


const router = createBrowserRouter([
    {path:'',element:<MainLayout/>, children:[
            {index:true,element:<Navigate to={'movies'}/>},
            {path:'movies', element:<MoviesPage/>, children:[
                    {path:':id',element:<MovieinfoPage/>}
                ]},
            {path:'genres',element:<GenresPage/>},
            {path:'search',element:<SearchPage/>}
        ]}
])

export {router}