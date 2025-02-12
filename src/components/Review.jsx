import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`);
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, []);

    return (
        <section className=" bg-black text-white">
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-300">Customer Reviews</h2>
            {/* Swiper Slider */}
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg mx-4 my-8'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8 text-center text-gray-300'>{review.details}</p>
                            <h3 className='text-xl font-bold text-white'>{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Review;