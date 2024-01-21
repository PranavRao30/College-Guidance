import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

const Landing2 = () => {
    const images = [
        "/amc.jpg",
        "/random1.jpeg",
        "/random2.jpeg",
        "/bmsce2.jpg",
        "/rvce.png",
        "/bmsce3.jpg",
        "/rvce2.jpg",
        "/pesu1.jpg"
    ];

    const newsLinks = [
        {
            title: "KCET Registrations Underway, KEA Issues Guidelines for Candidates",
            link: "https://www.timesnownews.com/education/kcet-2024-registration-underway-kea-issues-guidelines-for-candidates-article-107027778"
        },
        {
            title: "Top 10 Engineering Colleges in Bengaluru - Explore the leading engineering institutions in Bengaluru",
            link: "https://idreamcareer.com/blog/top-engineering-colleges-in-bangalore/"
        },
        {
            title: "KCET 2024: Karnataka CET registration begins at kea.kar.nic.in, direct link here",
            link: "https://www.hindustantimes.com/education/competitive-exams/kcet-2024-karnataka-cet-registration-begins-at-kea-kar-nic-in-direct-link-here-101704871665428.html"
        },
        {
            title: "KCET 2024 Registration Starts Today; Check How To Fill Application Form Here",
            link: "https://www.telegraphindia.com/edugraph/news/kcet-2024-registration-starts-today-check-how-to-fill-application-form-here/cid/1992801"
        },
        {
            title: "Govt restores 9,000 engineering seats in KCET matrix",
            link: "https://www.deccanherald.com/india/karnataka/govt-restores-9000-engineering-seats-in-kcet-matrix-1243861.html"
        },
        {
            title: "Top Engineering Colleges in Karnataka 2024: Rankings, Fees, Admission, Placements",
            link: "https://www.shiksha.com/engineering/ranking/top-engineering-colleges-in-karnataka/44-2-106-0-0"
        }
    ];

    const [tickerHeight, setTickerHeight] = useState(0);

    useEffect(() => {
        const tickerContainer = document.querySelector('.newsscrollul');
        const tickerItems = tickerContainer.children;
    
        if (tickerItems.length > 0) {
            const moveTop = () => {
                tickerContainer.style.transition = 'margin-top 3s cubic-bezier(0.25, 0.1, 0.25, 1)';
                tickerContainer.style.marginTop = `-${tickerHeight + 40}px`; // Display 5 items at a time
    
                setTimeout(() => {
                    tickerContainer.style.transition = 'none';
                    tickerContainer.style.marginTop = '0';
                    tickerContainer.appendChild(tickerContainer.children[0].cloneNode(true));
                    tickerContainer.removeChild(tickerContainer.children[0]);
                }, 1000);
            };
    
            const intervalId = setInterval(moveTop, 3000);
    
            return () => clearInterval(intervalId);
        }
    }, [tickerHeight, newsLinks]);
    
    useEffect(() => {
        const tickerItemHeight = document.querySelector('.newsscrollli').offsetHeight;
        document.querySelector('.newsdiv').style.height = `${6.5 * tickerItemHeight}px`;
        setTickerHeight(tickerItemHeight);
    }, []);

    return (
        <div className="bg-blue-200 p-0 m-0">
            <Navbar />
            <div className='h-[80px]'></div>
            <div>
                <Carousel
                    indicators={true}
                    nextIcon={<ChevronRight sx={{ fontSize: 40 }} />}
                    prevIcon={<ChevronLeft sx={{ fontSize: 40 }} />}
                    className='p-0 m-0 shadow-inner rounded-0'
                >
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                src={image}
                                alt={`College Photo ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '60vh',
                                    objectPosition: '50% 25%',
                                    objectFit: 'cover',
                                    borderRadius: '0'
                                }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {/* About Us Section */}
            <section className="p-8">
                <div className="text-center">
                    <p className="text-lg sm:text-4xl font-medium p-12">Your trusted source for college information and guidance. Explore our website for valuable information and resources to guide you on your academic journey.</p>
                    <button className='p-3 bg-blue-500 rounded text-2xl font-medium hover:scale-110 text-white'>
                        <Link to="/predict">Predict your college now!</Link></button>
                </div>
            </section>

            {/* Top News Section */}
            <section className='bg-white p-8'>
                <div className="text-center flex items-center flex-col">
                    <h2 className="text-5xl font-bold mb-4">TOP NEWS</h2>
                    <div className={`p-8 bg-blue-100 w-fit overflow-hidden rounded-[10px] newsdiv`}>
                        <ul className="text-center newsscrollul">
                            {newsLinks.map((news, index) => (
                                <li key={index} className='newsscrollli p-2'>
                                    <a href={news.link} className='text-blue-500 hover:underline'>
                                        <p className='text-black'>{news.title}</p>
                                        <p className='hover:underline'>{news.link}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Landing2;
