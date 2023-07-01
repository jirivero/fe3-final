import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useGlobalContext } from './global.context';

const Layout = () => {

    const { state } = useGlobalContext()

return (

        <div className={state.theme} style={{width: "100vw", minHeight: "100vh"}}>
            <Navbar/>
            <Outlet />
            <Footer />
        </div>   
    )
};

export default Layout;