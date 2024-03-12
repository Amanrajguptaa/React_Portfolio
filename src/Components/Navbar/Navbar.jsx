import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar()
{
    return (
        <>
        <nav class="max-w-full  py-3 px-8 flex justify-between items-center sticky top-0 z-50 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        
            <Link to="/">
            <img class="h-14 " src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709488906/media/Aman_Raj_Gupta__4_-removebg-preview_1_lpomuh.png"alt="logo"/>
            </Link>
            <ul class="hidden md:flex mr-5 items-center gap-10 text-white justify-center font-bold">
            <li className="hover:bg-[#6420AA] rounded-md p-2">
                <NavLink to="/" className={({isActive}) => `${isActive ? "text-[#FCDC2A]" : "text-white"}` }>                  
                <HomeIcon className='text-large'/>
                </NavLink>
                </li>
                <li className="hover:bg-[#6420AA] rounded-md p-2">
                <NavLink to="/about" className={({isActive}) => `${isActive ? "text-[#FCDC2A]" : "text-white"}` }>                  
                About me
                </NavLink>
                </li>                
                <li className="hover:bg-[#6420AA] rounded-md p-2">
                <NavLink to="/contact" className={({isActive}) => `${isActive ? "text-[#FCDC2A]" : "text-white"}` }>                  
                Contact
                </NavLink>
                </li> 
              <li className="hover:bg-[#6420AA] rounded-md p-2"><a href="https://amanrajgupta.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blogs<RssFeedIcon/></a></li>
            
            </ul>
            <div class="md:hidden">
            <button class="text-5xl font-bold text-white ">&#8801;</button>
            </div>
        
        </nav>
        </>
    );
}
