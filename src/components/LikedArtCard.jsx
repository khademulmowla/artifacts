import React from 'react';

const LikedArtCard = ({ like }) => {
    const { artiName, artiImg, category, history, create, discoverAt, discoverBy, location, name, email, like_count, _id } = like || {}
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
                    <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full">
                        {category}
                    </span>
                </div>

                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                    {like.history.substring(0, 70)}....
                </p>
                <p className="mt-2 text-sm font-bold text-gray-600 dark:text-gray-300">
                    Discover At: {discoverAt}
                </p>

                <p className="mt-2 text-sm font-bold text-gray-600 dark:text-gray-300">
                    Location: {location}
                </p>
            </div>
        </div>
    );
};

export default LikedArtCard;