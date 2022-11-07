import { Button, Card } from 'flowbite-react';
import React from 'react';

const Service = ({ service }) => {
    const { image, name, description, ratings, comment } = service;

    return (
        <div className="">
            <Card>
                <div className='flex justify-center items-center'>
                    <img className='w-72 h-60'
                        src={image} alt='' />
                </div>

                <h5 className="text-2xl font-bold">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.length > 100 ? description.slice(0, 100) : description}...
                </p>
                <div className='flex justify-between'>
                    <p>Ratings: {ratings}</p>
                    <p>Reviews: {comment}</p>
                </div>
                <Button
                    className='w-full'
                    gradientMonochrome="success"
                >
                    View Details
                </Button>
            </Card>
        </div>
    );
};

export default Service;