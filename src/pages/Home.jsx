import React from 'react';
import Carousel from '../components/Carousel.jsx';
import FeaturedArtifacts from '../components/FeaturedArtifacts.jsx';
import Faq from '../components/Faq.jsx';
import ContactUs from '../components/ContactUs.jsx';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    assignment-11 | Home
                </title>
            </Helmet>
            <Carousel></Carousel>
            <FeaturedArtifacts></FeaturedArtifacts>
            <Faq></Faq>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;