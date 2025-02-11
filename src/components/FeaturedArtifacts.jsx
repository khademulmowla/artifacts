import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from './ArtifactCard';
import { Typewriter } from "react-simple-typewriter";

import { Link } from 'react-router-dom';

const FeaturedArtifacts = () => {
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetchFeaturedArts();
    }, []);
    const fetchFeaturedArts = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/featured-artifacts`);
            setArts(data);
        } catch (error) {
            console.error('Error fetching featured artifacts:', error);
        }
    };
    return (
        <div className='mb-10'>
            <div className="w-1/2 mx-auto mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-center text-gray-300">
                    <Typewriter
                        words={['Featured Artifacts']}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={1500}
                    />
                </h2>
                <p className="text-center text-gray-400">
                    <Typewriter
                        words={[
                            'Relics of History, Revived',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </p>
                <p className="text-center text-gray-400">
                    <Typewriter
                        words={[
                            'Dive into the stories behind',
                            'the most treasured artifacts.',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </p>
            </div>
            <div className='grid grid-cols-1 px-8 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    arts.map(art => <ArtifactCard art={art} key={art._id}></ArtifactCard>)
                }
            </div>
            <div className='my-6 px-8'>
                <Link
                    to="/artifacts"
                    className='w-full max-w-[300px] mx-auto text-white btn btn-sm hover:bg-[#ac9a1a] bg-blue-900 block flex justify-center items-center'
                >
                    See All
                </Link>
            </div>
        </div>
    );
};

export default FeaturedArtifacts;