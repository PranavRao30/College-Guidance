import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

function Navbar() {
    const [toggle, setToggle] = useState(false);


    return (
        <nav className={`px-8 sm:px-20 w-full flex items-center py-8 fixed top-0 z-20 bg-gradient-to-r from-blue-500 to-blue-700`}>
            <div className="w-full flex justify-between items-center mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-white text-[22px] font-semibold cursor-pointer">College Guidance</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10 text-white'>
                    <li className="p-2 text-lg font-medium hover:scale-110"><Link to='/predict'>Predict College</Link></li>
                    <li className="p-2 text-lg font-medium hover:scale-110">About Us</li>
                    <li className="p-2 text-lg font-medium hover:scale-110">Contact Us</li>
                    <li className="p-2 text-lg font-medium hover:scale-110">Community</li>
                    <li><button className="p-2 bg-white text-blue-800 font-semibold rounded-[10px] text-lg hover:scale-110">LOG IN</button></li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-blue-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            <li>Predict College</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Community</li>
                            <li>LOG IN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;