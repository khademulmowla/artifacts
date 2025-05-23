import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from '../components/ArtifactCard';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../components/LoadingSpinner';

const AllArtifacts = () => {
    const [arts, setArts] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAllArts = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-artifacts?search=${search}`);
                setArts(data);
            } catch (error) {
                console.error('Error fetching artifacts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAllArts();
    }, [search]);
    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <Helmet>
                <title>
                    Artifacts | All Artifacts
                </title>
            </Helmet>
            <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
                <form>
                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-gray-200 dark:bg-[#ded6d6] outline-none focus:placeholder-transparent'
                            type='text'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            name='search'
                            placeholder='Enter Artifact Name'
                            aria-label='Enter Artifact Name'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className='grid grid-cols-1 px-8 gap-8 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    arts.map(art => <ArtifactCard art={art} key={art._id}></ArtifactCard>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;