import React from 'react';
import team1 from '../../src/assets/images/con1.png'
import team2 from '../../src/assets/images/con2.png'

const ContactUs = () => {
    return (
        <div className='mb-10'>
            <div>
                <h1 className='text-3xl font-semibold text-center text-white mb-10'>Contact Us</h1>
            </div>
            <div className="hero min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img
                            src={team1
                            }
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl" />
                        <img
                            src={team2
                            }
                            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl" />
                    </div>
                    <div className='flex-1'>
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
                                <button to="/#" className='w-full text-white btn btn-sm bg-[#ac9a1a] hover:bg-blue-900'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ContactUs;