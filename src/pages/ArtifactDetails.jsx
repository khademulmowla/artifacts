import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const ArtifactDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [art, setArt] = useState([])
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        fetchAllArts()
        checkLikeStatus();
    }, [id])
    const fetchAllArts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifact/${id}`)
        setArt(data)
    }
    const checkLikeStatus = async () => {
        if (user?.email) {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/liked/${user.email}`);
            const liked = data.some((like) => like.artLikeId === id);
            setIsLiked(liked);
        }
    };
    const { artiName, artiImg, category, history, create, discoverAt, discoverBy, location, name, email, like_count, _id } = art || {}

    const toggleLike = async () => {
        // Optimistic UI update
        const newLikeStatus = !isLiked;
        setIsLiked(newLikeStatus);

        try {
            const likeData = {
                artiName: art.artiName,
                artiImg: art.artiImg,
                category: art.category,
                history: art.history,
                create: art.create,
                discoverAt: art.discoverAt,
                discoverBy: art.discoverBy,
                location: art.location,
                name: art.name,
                email: user?.email,
                artLikeId: art._id,
            };

            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-like`, likeData);
            setArt((prev) => ({
                ...prev,
                like_count: data.isLiked ? prev.like_count + 1 : prev.like_count - 1,
            }));

            toast.success(data.message);
        } catch (err) {
            setIsLiked(!newLikeStatus);
            console.error(err);
            toast.error(err?.response?.data || 'Something went wrong');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-800 text-gray-300 px-4 py-8">
            <Helmet>
                <title>Artifact Details</title>
            </Helmet>

            {/* Container */}
            <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 bg-gray-900 rounded-lg shadow-lg p-6 lg:p-10">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-lg shadow-md border border-gray-600">
                        <img
                            src={artiImg}
                            alt={artiName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-white">{artiName}</h1>
                        <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
                            {category}
                        </span>
                    </div>
                    <div className="space-y-2">
                        <p className="text-thin text-gray-400">
                            <span className="font-semibold text-lg">Created At:</span> {create}
                        </p>
                        <p className="text-thin text-gray-400">{history}</p>
                        <p className="text-thin text-gray-400">
                            <span className="font-semibold text-lg">Discovered At:</span> {discoverAt}
                        </p>
                        <p className="text-thin text-gray-400">
                            {discoverBy}
                        </p>
                        <p className="text-thin text-gray-400">
                            <span className="font-semibold text-lg">Present Location:</span> {location}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
                        <div>
                            <div className='text-gray-400 space-y-1'>
                                <p className="text-sm">Artifact Adder: {name}</p>
                                <p className="text-sm">Email: {email}</p>
                            </div>
                            <div className="mt-4">
                                <Link
                                    to="/artifacts"
                                    className="text-white btn btn-sm bg-[#ac9a1a] hover:bg-gray-800"
                                >
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <button
                                onClick={toggleLike}
                                className={`btn btn-sm ${isLiked ? 'bg-red-600' : 'bg-blue-800'} text-white hover:opacity-90 w-full md:w-auto`}
                            >
                                {isLiked ? 'Unlike' : 'Like'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;