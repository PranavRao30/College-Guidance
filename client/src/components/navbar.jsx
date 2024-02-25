import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Set the initial login status

    // Example useEffect to check login status when component mounts
    useEffect(() => {
        // Check the user's login status (you may need to implement this logic)
        // For example, you could check if a token exists in local storage
        const userLoggedIn = localStorage.getItem('token') !== null;

        // Update the state
        setIsLoggedIn(userLoggedIn);
    }, []);

    return (
        <nav className={`px-8 sm:px-20 w-full flex items-center py-8 fixed top-0 z-20 bg-[#8BB3FF]`}>
            <div className="w-full flex justify-between items-center mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-[22px] font-semibold cursor-pointer"><ExploreIcon className="scale-[2] m-3" />College Compass</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    <Link to='/predict'><li className="p-3 text-lg font-medium underline-hover">Predict College</li></Link>
                    <Link to='/about'><li className="p-3 text-lg font-medium underline-hover">About Us</li></Link>
                    <Link to='/faq'><li className="p-3 text-lg font-medium underline-hover">FAQs</li></Link>
                    <li className="p-3 text-lg font-medium underline-hover">Community</li>
                    {isLoggedIn ? (
                        <li><Link to='/profile'><AccountCircleIcon className="scale-[2] m-3" /></Link></li>
                    ) : (
                        <li><Link to='/login'><button className="p-3 bg-white text-black font-semibold rounded-[40px] text-lg hover:scale-110">LOG IN</button></Link></li>
                    )}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4 text-[#8BB3FF]'>
                            <li><Link to='/predict'>Predict College</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/faq'>FAQs</Link></li>
                            <li>Community</li>
                            {isLoggedIn ? (
                                <li><Link to='/profile'><AccountCircleIcon className="text-[24px]" /></Link></li>
                            ) : (
                                <li><Link to='/login'><button className="p-2 bg-[#DBEAFE] text-blue-800 font-semibold rounded-[10px] text-lg hover:scale-110">LOG IN</button></Link></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div >
        </nav >
    )
}

export default Navbar;
