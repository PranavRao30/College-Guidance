import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Navbar from '../components/navbar';

const Landing2 = () => {

    const images = [
        "/amc.jpg",
        "/bmsce2.jpg",
        "/kvg.jpeg",
        "/rvce.png",
        "/bmsce.jpg",
        "/rvce2.jpg"
    ]

    return (
        <div className="bg-blue-200 min-h-screen">
            <Navbar />
            <div className='h-[80px]'></div>
            <div className='w-screen h-1/2 sm:h-3/4'>
                <Carousel
                    indicators={true}
                    nextIcon={<ChevronRight sx={{ fontSize: 40 }} />}
                    prevIcon={<ChevronLeft sx={{ fontSize: 40 }} />}
                    className='p-0 m-0 shadow-inner'
                >
                    {images.map((image) => (
                        <Carousel.Item>
                        <img
                            src={image}
                            alt="College Photo"
                            style={{
                                width: '100vw',
                                height: '60vh',
                                objectFit: 'cover',
                            }}
                        />
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {/* About Us Section */}
            <section className="p-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
                </div>
            </section>

            {/* Top News Section */}
            <section className="bg-white p-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">TOP NEWS</h2>
                    <ul className="text-left">
                        <li><a href="https://idreamcareer.com/blog/top-engineering-colleges-in-bangalore/" className="text-blue-500">"Top 10 Engineering Colleges in Bengaluru" - Explore the leading engineering institutions in Bengaluru...</a></li>
                        {/* Add other news items as needed */}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Landing2;
