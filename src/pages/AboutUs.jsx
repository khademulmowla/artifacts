import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHistory, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6">
            <Helmet>
                <title>
                    Artifacts | About Us
                </title>
            </Helmet>
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-xl md:text-2xl font-bold text-center dark:text-gray-300">
                    About Us
                </h2>
                <p className="dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    Welcome to <span className="text-[#ac9a1a] font-semibold">Artifact Explorer</span>, where history comes alive! We are passionate about sharing the rich tapestry of human history through our curated collection of artifacts. Join us on this journey to uncover the stories of the past.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1: Our History */}
                    <div className=" bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <FaHistory className="text-[#ac9a1a] text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Our History</h3>
                        <p className="dark:text-gray-400">
                            Founded in 2010, we have been dedicated to showcasing historical artifacts from around the world.
                        </p>
                    </div>

                    {/* Feature 2: Our Mission */}
                    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <FaLightbulb className="text-[#ac9a1a] text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                        <p className="dark:text-gray-400">
                            To inspire curiosity and learning by making history accessible and engaging for everyone.
                        </p>
                    </div>

                    {/* Feature 3: Our Team */}
                    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <FaUsers className="text-[#ac9a1a] text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Our Team</h3>
                        <p className="dark:text-gray-400">
                            A passionate group of historians, and educators dedicated to sharing the wonders of history.
                        </p>
                    </div>

                    {/* Feature 4: Our Achievements */}
                    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <FaAward className="text-[#ac9a1a] text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Our Achievements</h3>
                        <p className="dark:text-gray-400">
                            Recognized globally for our contributions to historical preservation and education.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;