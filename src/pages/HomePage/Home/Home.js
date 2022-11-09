import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Slider from '../Carousel/Slider';
import DeveloperInfo from '../DeveloperInfo/DeveloperInfo';
import HomeCard from '../HomeCard/HomeCard';
import ProjectOverview from '../ProjectOverview/ProjectOverview';
import StaticReview from '../StaticReview/StaticReview';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <ProjectOverview></ProjectOverview>
            <HomeCard></HomeCard>
            <StaticReview></StaticReview>
            <DeveloperInfo></DeveloperInfo>
        </div>
    );
};

export default Home;