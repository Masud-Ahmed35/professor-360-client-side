import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, image, name, description, ratings, reviews } = service;

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
                    <p>Reviews: {reviews}</p>
                </div>
                <Link to={`/service-details/${_id}`}>
                    <Button className='w-full' gradientMonochrome="success">
                        View Details
                    </Button>
                </Link>
            </Card>
        </div>
    );
};

export default Service;