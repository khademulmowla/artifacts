import React from 'react';
import { Link } from 'react-router-dom';

const ArtifactCard = ({ art }) => {
    const { artiName, artiImg, category, history, like_count, _id } = art || {}
    return (
        <div className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-200 border border-gray-600 rounded-md shadow-lg hover:shadow-xl hover:scale-[1.05] transition-transform duration-300 flex flex-col">
            <div className="w-full h-48 overflow-hidden rounded-t-md">
                <img
                    src={artiImg}
                    alt={artiName}
                    className="w-full h-full"
                />
            </div>
            <div className="flex-1 p-4">
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-800 dark:text-white">{artiName}</span>
                    <span className="px-3 py-1 text-[8px] border bg-blue-900 uppercase rounded-full">
                        {category}
                    </span>
                </div>

                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                    {history.substring(0, 70)}....
                </p>
                <p className='mt-2 text-sm font-bold text-gray-700 dark:text-gray-400 '>Total Like: {like_count}</p>
            </div>
            <div className="mt-auto p-4">
                <Link to={`/artifact/${_id}`}>
                    <button className="btn btn-sm bg-blue-900 hover:bg-[#ac9a1a] text-white w-full">
                        Show Details
                    </button>
                </Link>
            </div>
        </div>



    );
};

export default ArtifactCard;