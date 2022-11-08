import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const data = useLoaderData();
    const { name, image, reviews, ratings, price, description } = data.data;

    return (
        <div className="w-3/4 mx-auto my-10 lg:w-1/2 lg:mx-auto p-4 shadow-md">
            <div className="">
                <div className="space-y-2 flex justify-center">
                    <img src={image} alt="" className="rounded-md h-64 lg:h-80" />
                </div>
                <div className="px-4">
                    <div className='flex justify-between mb-7 mt-5'>
                        <p className="text-3xl font-bold">{name}</p>
                        <p className="text-2xl font-bold">Price: <span className='text-amber-600 font-extrabold'>${price}</span></p>
                    </div>
                    <p className="leading-snug">{description}</p>
                    <div className='flex justify-between my-7 font-semibold text-lg'>
                        <p>Ratings: {ratings}</p>
                        <p>Reviews: {reviews}</p>
                    </div>
                    <Link to='/services'>
                        <Button className='w-3/4 mx-auto' gradientMonochrome="success">Go Back</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;