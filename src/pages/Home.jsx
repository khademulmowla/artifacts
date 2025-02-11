import React from 'react';
import Carousel from '../components/Carousel.jsx';
import FeaturedArtifacts from '../components/FeaturedArtifacts.jsx';
import Faq from '../components/Faq.jsx';
import ContactUs from '../components/ContactUs.jsx';
import { Helmet } from 'react-helmet-async';
import Review from '../components/Review.jsx';
import Community from '../components/Community.jsx';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Artifacts | Home
                </title>
            </Helmet>
            <Carousel></Carousel>
            <FeaturedArtifacts></FeaturedArtifacts>
            <Review></Review>
            <Faq></Faq>
            <Community></Community>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;