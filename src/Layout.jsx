import Navbar from '/src/Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer'; 
import { Outlet } from 'react-router-dom';
export default function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}