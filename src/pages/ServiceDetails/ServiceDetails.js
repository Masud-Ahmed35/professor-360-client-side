import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const { _id, name, image, reviews, ratings, price, description } = data.data;

    const handleReviewSubmit = event => {
        event.preventDefault();

        const review = {
            serviceId: _id,
            serviceName: name,
            ratings: event.target.rating.value,
            message: event.target.message.value,
            userName: user?.displayName,
            email: user?.email,
            photo: user?.photoURL
        }
        console.log(review);
    }


    return (
        <>
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

            {/* ------------Add Review-------------- */}
            <div className='mt-20'>
                {
                    user && user?.uid ?
                        <>
                            <h3 className='text-center font-bold text-2xl text-yellow-700'>Please Add a Review</h3>
                            <form onSubmit={handleReviewSubmit} className="flex flex-col gap-5 w-1/2 mx-auto">
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="small"
                                            value="Ratings"
                                        />
                                    </div>
                                    <TextInput
                                        id="small"
                                        type="text"
                                        name='rating'
                                        sizing="sm"
                                        placeholder='Please give a rating out of 5'
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="large"
                                            value="Description"
                                        />
                                    </div>
                                    <TextInput
                                        id="large"
                                        type="text"
                                        name='message'
                                        sizing="lg"
                                        placeholder='Your Message'
                                    />
                                </div>
                                <Button type="submit" className='w-3/4 mx-auto' gradientMonochrome="success">Submit Your Review</Button>
                            </form>
                        </>
                        :
                        <>
                            <div className='text-center'>
                                <h3 className='text-2xl font-bold'>Please Login first to Give your Review</h3>
                                <Link to='/login' className='hover:underline text-lg text-amber-600 font-semibold'>Login Link</Link>
                            </div>
                        </>
                }

            </div>
        </>
    );
};

export default ServiceDetails;