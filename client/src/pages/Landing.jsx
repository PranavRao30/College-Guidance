// src/components/LandingPage.js

import React from 'react';
import Navbar from '../components/navbar';

const LandingPage = () => {
    const websiteDetails = {
        description: 'Your trusted source for college information and guidance. Explore our website for valuable information and resources to guide you on your academic journey.',
    };

    const newsLinks = [
        {
            title: 'Exciting News 1',
            url: 'https://example.com/news1',
        },
        {
            title: 'Latest Updates 2',
            url: 'https://example.com/news2',
        },
        {
            title: 'Important Announcement 3',
            url: 'https://example.com/news3',
        },
        {
            title: 'Upcoming Events 4',
            url: 'https://example.com/news4',
        },
        {
            title: 'Scholarship Opportunities 5',
            url: 'https://example.com/news5',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-blue-200 text-white min-h-screen flex flex-col lg:flex-row justify-center items-center">
                <div className="lg:w-1/2 text-center p-20">
                    <p className="mb-8 text-black text-3xl font-medium">{websiteDetails.description}</p>
                </div>

                <div className="lg:w-1/2 flex justify-center items-center flex-col">
                    <h2 className="text-2xl font-bold mb-4 text-black">Latest News</h2>
                    <ul
                        id="news-container"
                        className="text-lg overflow-y-auto max-h-60 lg:max-h-full text-black text-center"
                    >
                        {newsLinks.map((news, index) => (
                            <li key={index} className="mb-2">
                                <a href={news.url} target="_blank" rel="noopener noreferrer" className="underline">
                                    {news.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
