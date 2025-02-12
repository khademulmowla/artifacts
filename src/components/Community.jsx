import React from 'react';
import { FaEarlybirds, FaGift, FaPercent } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Community = ({ user }) => {
    const handleSubscribe = () => {
        if (!user) {
            toast.error('Please log in to subscribe.');
            return;
        }

        toast.success('Thank you for subscribing!');
    };

    return (
        <div className="bg-gray-800 text-gray-200 py-10 px-8 rounded-lg shadow-2xl text-center my-10">
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-300 mb-4">
                Get Exclusive Benefits!
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
                Unlock the secrets of history with us! Become a part of our growing community and enjoy:
            </p>
            <ul className="text-gray-400 mb-8 text-left mx-auto max-w-md space-y-4">
                <li className="flex items-center gap-3">
                    <FaEarlybirds className="text-[#ac9a1a] text-xl" />
                    <span>Early access to newly added artifacts</span>
                </li>
                <li className="flex items-center gap-3">
                    <FaPercent className="text-[#ac9a1a] text-xl" />
                    <span>Special discounts on premium memberships</span>
                </li>
                <li className="flex items-center gap-3">
                    <FaGift className="text-[#ac9a1a] text-xl" />
                    <span>Monthly giveaways for historical books and replicas</span>
                </li>
            </ul>
            <div className="flex flex-col items-center gap-4">
                <button
                    type="button"
                    onClick={handleSubscribe}
                    className="w-full max-w-md px-6 py-3 text-white rounded-md bg-[#ac9a1a] hover:bg-blue-900 transition-colors"
                >
                    Subscribe Now
                </button>
            </div>
        </div>
    );
};

export default Community;