import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const AboutUs = () => {
    return (
        <div className="bg-blue-100 min-h-screen">
            <Navbar />
            <div className='about-bg-img mt-[80px] h-[55vh]'></div>
            <div className="bg-blue-600 w-fit mx-auto relative top-[-30px] p-3 text-center z-10">
                <p className="text-white font-semibold text-3xl about-about">About Us</p>
            </div>
            <div className='bg-blue-100 p-12 sm:px-40 text-justify about-text pt-0 text-lg'>
                <p>Welcome to College Guidance, your ultimate destination for comprehensive college information and guidance. Our platform is designed to assist students in making informed decisions about their academic journey, providing valuable resources and insights into various colleges, courses, and educational pathways. Whether you are a high school student exploring college options or a graduate seeking specialized programs, we aim to be your trusted companion throughout this crucial decision-making process.</p>
                <h3 className=''>Our Mission</h3>
                <p>At College Guidance, our mission is to simplify the complex landscape of higher education. We understand that choosing the right college is a pivotal decision, and our platform is dedicated to empowering students with the knowledge they need to navigate this journey successfully. From detailed college profiles and admission criteria to the latest news and insights about the educational sector, we strive to be a one-stop destination for all your college-related queries.</p>
                <h3>Meet the Team</h3>
                <p>College Guidance is the collaborative effort of a passionate group of students from BMS College of Engineering. Comprising four talented individuals, our team is dedicated to creating a user-friendly platform that addresses the diverse needs of students. As students ourselves, we recognize the challenges of choosing the right college, and our collective goal is to provide a resourceful platform that makes this process smoother and more transparent. Feel free to explore, discover, and embark on your academic journey with confidence!</p>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
