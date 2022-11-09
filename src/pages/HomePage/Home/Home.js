import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Slider from '../Carousel/Slider';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <HomeCard></HomeCard>
        </div>
    );
};

export default Home;