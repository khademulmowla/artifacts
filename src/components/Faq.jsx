import React from 'react';
import faqlottieanimation from '../../src/assets/faq2.json'
import Lottie from 'lottie-react';


const Faq = () => {
    return (
        <div className='p-6 gap-8'>
            <div className="flex items-center justify-between mb-4 gap-8">
                <span className="w-1/5 border-b lg:w-3/4"></span>
                <div className="text-3xl text-white uppercase hover:underline">
                    FAQ
                </div>
                <span className="w-1/5 border-b lg:w-3/4"></span>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 px-6">
                <div className="lg:w-1/2 w-full text-center">
                    <div className="w-2/4 mx-auto">
                        <Lottie animationData={faqlottieanimation} />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full text-white ">
                    <div className="collapse collapse-arrow bg-gray-800">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            1. What is the purpose of the Historical Artifacts Tracker?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>The Historical Artifacts Tracker allows users to browse, view details, and add entries about various historical artifacts. Users can also like artifacts, manage their own contributions, and explore comprehensive information about historical items.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow mt-4 bg-gray-800">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            2. Can I add my own artifacts to the platform?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>Yes, registered users can add their own artifacts by filling out a form with details like name, image URL, historical context, discovery information, and more. This feature is accessible through a protected route.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow mt-4 bg-gray-800">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            3. Can I edit or delete artifacts that I have added?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>Yes, users can edit or delete the artifacts they have contributed by navigating to the "My Artifacts" section. This ensures users can manage their contributions as needed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;