import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../components/LoadingSpinner';

const MyArtifacts = () => {
    const { user } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchAllArts()
    }, [user])
    const fetchAllArts = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts/${user?.email}`)
            setArts(data)
        } catch (error) {
            console.error("Error fetching my artifacts:", error);
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return <LoadingSpinner />;
    }
    const handleDelete = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/artifact/${id}`)
            // console.log(data)
            toast.success('Data deleted successfully')
            fetchAllArts()

        } catch (err) {
            toast.error(err.message)
        }
    }
    const toastDelete = id => {
        toast(
            (t) => (
                <div className='flex gap-3 items-center'>
                    <div><p>Are you <b>sure?</b></p></div>
                    <div className='flex gap-2'>
                        <button className='bg-red-800 text-white px-3 py-1 rounded-md' onClick={() => {
                            toast.dismiss(t.id)
                            handleDelete(id)
                        }}>Yes</button>
                        <button className='bg-green-800 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancel</button>
                    </div>

                </div>
            )
        );
    }
    return (
        <div className='mb-10'>
            <Helmet>
                <title>
                    Artifacts | My Artifacts
                </title>
            </Helmet>
            <div className="text-center my-10">
                <h1 className="text-xl md:text-2xl font-bold text-center dark:text-gray-300">The Artifact Chronicles Added By You.</h1>
                <p className="dark:text-gray-400 max-w-xs md:max-w-md mx-auto">These artifacts stand as silent witnesses, carrying the essence of history into the present.</p>
            </div>

            {arts.length === 0 ? (
                <div className="text-center mt-12">
                    <h2 className="text-2xl font-semibold text-gray-400">No Added Artifacts Found</h2>
                    <p className="text-gray-300 mt-4">You haven't added any artifacts yet. Start adding...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-8">
                    {
                        arts.map(art => <div key={art._id}>
                            <div className="flex-1 px-4 py-7 bg-gray-200 dark:bg-gray-800 text-gray-200 border border-gray-600 rounded-md shadow-md md:min-h-[350px] flex flex-col justify-between max-w-full">
                                <div>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1">
                                            <span className="px-4 py-1 text-xs bg-blue-900 uppercase dark:text-white border rounded-full">
                                                {art.category}
                                            </span>
                                            <p className="text-xl mt-2 font-light text-gray-700 dark:text-gray-200">
                                                {art.artiName}
                                            </p>
                                            <h1 className="dark:text-gray-300 text-gray-700">
                                                Created At: {art.create}
                                            </h1>
                                            <h1 className="dark:text-gray-300 text-gray-700">
                                                Created At: {art.discoverBy}
                                            </h1>
                                            <p className="dark:text-gray-300 text-gray-700">
                                                Location: {art.location}
                                            </p>

                                        </div>
                                        <div className="w-full md:w-48 h-48 overflow-hidden rounded-md flex-shrink-0">
                                            <img
                                                src={art.artiImg}
                                                alt={art.artiName}
                                                className="w-full h-full object-cover border p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between py-4">
                                    <button
                                        onClick={() => toastDelete(art._id)}
                                        className="btn btn-sm bg-red-800 text-white hover:bg-red-400">
                                        Delete
                                    </button>
                                    <Link to={`/update/${art._id}`}>
                                        <button className="btn btn-sm bg-green-800 text-white hover:bg-[#ac9a1a]">Update</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            )}


        </div>
    );
};

export default MyArtifacts; 