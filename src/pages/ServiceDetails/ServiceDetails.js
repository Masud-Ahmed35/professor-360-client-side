import { Button, Label, Table, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ShowReviews from '../ShowReviews/ShowReviews';

const ServiceDetails = () => {
    const [allReviews, setAllReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const { _id, name, image, type, duration, price, description } = data.data;

    useEffect(() => {
        fetch(`http://localhost:7007/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setAllReviews(data.data)
                    setRefresh(!refresh)
                }
                else {
                    toast.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))

    }, [_id, refresh])

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
        fetch(`http://localhost:7007/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.insertedId) {
                    toast.success('Your Review Submitted Successfully');
                    event.target.reset();
                }
            })
            .catch(error => toast.error(error.message))
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
                            <p>Type: {type}</p>
                            <p>Duration: {duration} days</p>
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

            {/* --------------Show All Reviews-------------- */}
            <div className='my-10'>
                <h2 className='text-2xl font-bold text-center mb-7'>All Reviews for the service: <span className='font-extrabold text-yellow-600 italic'>{name}</span></h2>
                <div>

                    <Table hoverable={true}>
                        <Table.Head>
                            <Table.HeadCell>
                                <h2 className='flex justify-center'>User Info</h2>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Service Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Ratings
                            </Table.HeadCell>
                            <Table.HeadCell>
                                User Opinion
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                allReviews.map(allReview => <ShowReviews
                                    key={allReview._id}
                                    allReview={allReview}
                                ></ShowReviews>)
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;