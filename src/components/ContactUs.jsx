import React from 'react';
import { motion } from "motion/react"
import team1 from '../../src/assets/images/con1.png'
import team2 from '../../src/assets/images/con2.png'

const ContactUs = () => {
    return (
        <div className="hero min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 100 }}
                        transition={{ duration: 2, delay: 1, ease: "easeOut", repeat: Infinity }}
                        className="text-4xl font-bold my-4"><motion.span
                            animate={{ color: ['#fefefe', '#dbbe1d'] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                        >Contact Us</motion.span></motion.h1>
                    <div className="w-80 p-6 rounded shadow">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-3 py-2 border bg-[#ded6d6] border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-3 py-2 border bg-[#ded6d6] border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full px-3 py-2 border bg-[#ded6d6] border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>
                        <div className='text-center my-4'>
                            <button to="/#" className='w-full text-white btn btn-sm bg-[#ac9a1a] hover:bg-gray-800'>See All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;