import React, {useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/footer2'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

const Landing3 = () => {
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
        <>
            <Navbar />


            <div className='flex flex-col sm:flex-row bg-[#8BB3FF] pt-40'>
                <div className='p-8 sm:p-40'>
                    <h1 className='text-7xl font-bold mb-4'> Your #1 College Partner Website!</h1>
                    <p className='text-3xl sm:pr-20 mb-4'> Your trusted source for college information and guidance. Explore our website for valuable information and resources to guide you on your academic journey.</p>
                    <Link to='/predict'><button className='bg-[#DBEAFE] p-3 rounded-[40px] font-semibold text-xl border-[4px] border-[#DBEAFE] hover:bg-transparent'>PREDICT NOW</button></Link>
                </div>
                <div className='pr-80'>
                    <img src='/Illustration 2 final.png' className='hidden sm:block relative bottom-[-250px] scale-[3.87] z-[0]'></img>
                </div>
            </div>


            <div className='bg-[#DBEAFE] p-12 z-[10]'>
                <h1 className='text-5xl font-bold m-4 sm:mb-20 text-center'>OUR SERVICES</h1>
                <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-12'>
                    <div className='bg-[#8BB3FF] flex flex-col justify-center items-center p-8 rounded-4 w-full sm:w-3/12'>
                        <div>
                            <AccountBalanceIcon className='scale-[3.5] m-4 mb-12' />
                        </div>
                        <div>
                            <p className='text-2xl font-semibold m-2 text-center'>College Prediction</p>
                        </div>
                        <div>
                            <p className='text-justify'>Gain insights into your college admissions with our advanced prediction algorithm. Input your exam rank, and our system will analyze historical data, admission trends, and college statistics to provide you with personalized predictions. Make informed decisions about your academic future with confidence.</p>
                        </div>
                    </div>
                    <div className='bg-[#8BB3FF] flex flex-col justify-center items-center p-8 rounded-4 w-full sm:w-3/12'>
                        <div>
                            <GroupIcon className='scale-[3.5] m-4 mb-12' />
                        </div>
                        <div>
                            <p className='text-2xl font-semibold m-2 text-center'>Community</p>
                        </div>
                        <div>
                            <p className='text-justify'>Connect with a diverse community of students and educators in our interactive Community Chat. Discuss exam preparation strategies and seek advice on career choices. This open forum fosters networking, and the exchange of valuable insights, creating a supportive environment.</p>
                        </div>
                    </div>
                    <div className='bg-[#8BB3FF] flex flex-col justify-center items-center p-8 rounded-4 w-full sm:w-3/12'>
                        <div>
                            <BookmarkAddIcon className='scale-[3.5] m-4 mb-12' />
                        </div>
                        <div>
                            <p className='text-2xl font-semibold m-2 text-center'>Bookmark Favourites</p>
                        </div>
                        <div>
                            <p className='text-justify'>Keep track of colleges that catch your interest by using our Bookmark feature. Easily save and organize a list of your favorite colleges, making it convenient to revisit and compare them later. Whether you're exploring options or planning your applications, this tool helps you curate a personalized collection of colleges.</p>
                        </div>
                    </div>
                </div>
            </div>


            <section className='bg-[#8BB3FF] p-12'>
                <div className="text-center flex items-center flex-col">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">TOP NEWS</h2>
                    <div className={`p-4 sm:p-8 w-full sm:w-fit overflow-hidden rounded-[10px] newsdiv bg-[#DBEAFE]`}>
                        <ul className="text-center newsscrollul">
                            {newsLinks.map((news, index) => (
                                <li key={index} className='newsscrollli p-2'>
                                    <a href={news.link} className='text-blue-800 hover:underline' target='_blank'>
                                        <p className='text-black'>{news.title}</p>
                                        <p className='hover:underline text-[#4B63FF]'>{news.link}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Landing3
