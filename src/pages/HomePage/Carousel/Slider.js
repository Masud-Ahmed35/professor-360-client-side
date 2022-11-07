import { Carousel } from 'flowbite-react';
import React from 'react';
import slider1 from '../../../assets/images/slider1.png'
import slider2 from '../../../assets/images/slider2.png'
import slider3 from '../../../assets/images/slider3.png'
import slider4 from '../../../assets/images/slider4.png'
import slider5 from '../../../assets/images/slider5.png'

const Slider = () => {
    return (
        <div className="mt-10 h-64 sm:h-80 xl:h-[600px]">
            <Carousel>
                <img
                    src={slider5}
                    alt="slider5"
                />
                <img
                    src={slider4}
                    alt="slider4"
                />
                <img
                    src={slider3}
                    alt="slider3"
                />
                <img
                    src={slider2}
                    alt="slider2"
                />
                <img
                    src={slider1}
                    alt="slider1"
                />
            </Carousel>
        </div>
    );
};

export default Slider;