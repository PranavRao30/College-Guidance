import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <div className="container mx-auto">
                <p className='p-2'>&copy; {new Date().getFullYear()}</p>
                <p className='p-2'>College Guidance: https://collegeguidance.netlify.app</p>
                <p className='p-2'>Made with &hearts; by </p>
                <p className='p-1'>Pranav Anantha Rao - 1BM22CS201</p>
                <p className=''>Prajwal P - 1BM22CS200</p>
                <p className='p-1'>Pannaga R Bhat - 1BM22CS189</p>
                <p className=''>Paarth Sanyal - 1BM22CS188</p>
            </div>
        </footer>
    )
}

export default Footer;
