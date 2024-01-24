import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FAQ = () => {
    const faqData = [
        {
            question: 'How can I predict my college using College Guidance?',
            answer: 'You can use our "Predict College" feature by entering your rank. The system will provide you with college recommendations based on your input.',
        },
        {
            question: 'How accurate is the college prediction feature?',
            answer: 'The college prediction feature provides estimations based on available data. It\'s important to note that actual admissions may vary, and users are encouraged to verify information independently.',
        },
        {
            question: 'What services does College Guidance provide?',
            answer: 'College Guidance offers comprehensive information and guidance related to colleges, courses, and educational pathways. Our platform aims to assist students in making informed decisions about their academic journey.',
        },
        {
            question: 'Is College Guidance free to use?',
            answer: 'Yes, College Guidance is a free platform designed to help students explore and navigate the college selection process.',
        },
        {
            question: 'How can I contact the College Guidance team?',
            answer: 'You can reach out to us through collegeguidance@gmail.com. We welcome feedback, suggestions, and any inquiries you may have.',
        },
    ];

    const [expandedAnswers, setExpandedAnswers] = useState(Array(faqData.length).fill(false));

    const toggleAnswer = (index) => {
        setExpandedAnswers((prev) => {
            const newArr = [...prev];
            newArr[index] = !newArr[index];
            return newArr;
        });
    };

    return (
        <div className="bg-blue-100 min-h-screen pt-[120px]">
            <Navbar />
            <div className="p-8 sm:px-40 text-center">
                <h1 className="text-4xl font-semibold p-4 mb-4">Frequently Asked Questions</h1>
                {faqData.map((faq, index) => (
                    <div key={index} className="mb-6 p-3 bg-blue-200 rounded-[10px]">
                        <div className="flex items-center justify-between bg-blue-200">
                            <h2 className="text-2xl font-medium">{faq.question}</h2>
                            <button
                                className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                onClick={() => toggleAnswer(index)}
                            >
                                {expandedAnswers[index] ? <RemoveIcon /> : <AddIcon />}
                            </button>
                        </div>
                        {expandedAnswers[index] && <p className="mt-2 text-xl">{faq.answer}</p>}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;