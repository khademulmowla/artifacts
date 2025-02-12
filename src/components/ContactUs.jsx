import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import team1 from '../../src/assets/images/con1.png';
import team2 from '../../src/assets/images/con2.png';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill out all fields.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        // If validation passes, show success toast
        toast.success('Thank you for contacting us! We will get back to you soon.');

        // Clear the form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className='mb-10'>
            <div>
                <h1 className='text-xl md:text-2xl font-bold text-center text-gray-700 dark:text-gray-400 mb-10'>Contact Us</h1>
            </div>
            <div className="hero min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img
                            src={team1}
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl"
                            alt="Team 1"
                        />
                        <img
                            src={team2}
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl"
                            alt="Team 2"
                        />
                    </div>
                    <div className='flex-1'>
                        <form onSubmit={handleSubmit} className="w-80 p-6 rounded shadow">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border dark:bg-[#ded6d6] border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border dark:bg-[#ded6d6] border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border dark:bg-[#ded6d6] border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>
                            <div className='text-center my-4'>
                                <button
                                    type="submit"
                                    className='w-full text-white btn btn-sm bg-[#ac9a1a] hover:bg-blue-900'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;