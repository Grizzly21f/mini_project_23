import React from 'react';
import {Header} from "../../components/header/Header";
import {Outlet} from "react-router-dom";
import mainLayoutCSS from './MainLayout.module.css'; // Change identifier name
import lightDarkThemeCSS from './Lightdarktheme.module.css'; // Change identifier name



const MainLayout = () => {
    return (

        <div  className={lightDarkThemeCSS.cc} >
            <div>
                <Header/>
            </div>
            <div className={mainLayoutCSS.mn}>
                <Outlet />
            </div>
        </div>

    );
};

export  {MainLayout};