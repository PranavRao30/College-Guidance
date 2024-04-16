import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    const handleSubscribe = (event) => {
        event.preventDefault();
        if (document.getElementById('sub').value !== "")
            alert(`Email ID: ${document.getElementById('sub').value} is successfully subscribed for News-letters.\nStay tuned for more updates!`);
    };

    return (
        <footer className="bg-gray-900 text-[#DBEAFE] text-sm sm:text-md overflow-hidden">

            <div className="flex justify-around py-8 overflow-hidden">
                <ul className="text-left">
                    <li className='mb-2 hover:text-[#8BB3FF] transition-colors duration-300'><a href="#">College Notifications</a></li>
                    <li className='mb-2 hover:text-[#8BB3FF] transition-colors duration-300'><a href="#">News Updates</a></li>
                    <li className='mb-2 hover:text-[#8BB3FF] transition-colors duration-300'><a href="#">Admission Notifications</a></li>
                    <p className='mb-2'>Subscribe for News-Letters</p>
                    <form onSubmit={handleSubscribe}>
                        <li className=''>Email ID: <input type='email' id='sub' placeholder="Enter your email-Id..." className="rounded p-1 ml-1 text-[#000]" /></li>
                        <div className="mt-2">
                            <button type='submit' className="bg-[#DBEAFE] text-black px-4 py-2 rounded hover:bg-[#8BB3FF] transition-colors duration-300">Subscribe</button>
                        </div>
                    </form>
                </ul>

                <ul className="text-left">
                    <li className='mb-2 '>Resources</li>
                    <li className='mb-2 hover:text-[#8BB3FF] transition-colors duration-300'><a href="#">Courses Available</a></li>
                    <li className='mb-2 hover:text-[#8BB3FF] transition-colors duration-300'><a href="#">Competitive Exams</a></li>
                    <li className='mb-2 hover:text-[#8BB3FF] transition-colors duration-300'><a href="#">Articles</a></li>
                    <li className='mb-2 hover:text-[#8BB3FF] transition-colors duration-300'><a href="#">Education Trends</a></li>
                </ul>

                <div className="text-center text-[#DBEAFE]">
                    <p className='mb-2 '>Contact Us</p>
                    <div className='flex gap-2 flex-col sm:flex-row'>
                        <div><a href="https://www.instagram.com/" className='hover:text-[#8BB3FF] transition-colors duration-300'><InstagramIcon /></a></div>
                        <div><a href="https://www.linkedin.com/" className='hover:text-[#8BB3FF] transition-colors duration-300'><LinkedInIcon /></a></div>
                        <div><a href="https://www.facebook.com/" className='hover:text-[#8BB3FF] transition-colors duration-300'><FacebookIcon /></a></div>
                        <div><a href="https://www.whatsapp.com/" className='hover:text-[#8BB3FF] transition-colors duration-300'><WhatsAppIcon /></a></div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="flex justify-center items-center h-16">
                <p>&#169; {new Date().getFullYear()}, College Compass Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
