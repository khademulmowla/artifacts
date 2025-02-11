import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            toast.success(`Thank you for subscribing, ${email}!`);
            setEmail('');
        } else {
            toast.error('Please enter a valid email address.');
        }
    };

    return (
        <div className="bg-gray-800 text-gray-200 py-10 px-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Community & Get Exclusive Benefits!</h2>
            <p className="text-gray-400 mb-6">
                Unlock the secrets of history with us! Become a part of our growing community and enjoy:
            </p>
            <ul className="text-gray-400 list-disc list-inside mb-6 text-left mx-auto max-w-md">
                <li>Early access to newly added artifacts</li>
                <li>Special discounts on premium memberships</li>
                <li>Monthly giveaways for historical books and replicas</li>
            </ul>
            <form onSubmit={handleSubscribe} className="flex flex-col items-center gap-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac9a1a]"
                    required
                />
                <button
                    type="submit"
                    className="w-full max-w-md px-6 py-2 bg-[#ac9a1a] text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                    Subscribe Now
                </button>
            </form>
        </div>
    );
};

export default Newsletter;