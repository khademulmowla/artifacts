import React from 'react';
import Carousel from '../components/Carousel.jsx';
import FeaturedArtifacts from '../components/FeaturedArtifacts.jsx';
import Faq from '../components/Faq.jsx';
import ContactUs from '../components/ContactUs.jsx';
import { Helmet } from 'react-helmet-async';
import Newsletter from '../components/NewsLetter.jsx';
import Review from '../components/Review.jsx';

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
            <Newsletter></Newsletter>
            <Review></Review>
            <Faq></Faq>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;