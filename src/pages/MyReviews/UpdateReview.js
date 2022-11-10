import { Button, Label, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update-Review');
    const [review, setReview] = useState({});
    const navigate = useNavigate();
    const router = useParams();
    const { id } = router;

    useEffect(() => {
        fetch(`https://assignment-11-server-mu.vercel.app/single-review/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReview(data.data);
                }
            })
            .catch(error => toast.error(error.message))

    }, [id])

    const setTime = new Date();
    const time = setTime.getTime();

    const handleUpdate = (event) => {
        event.preventDefault();
        const review = {
            ratings: event.target.ratings.value,
            message: event.target.message.value,
            time: time
        }
        fetch(`https://assignment-11-server-mu.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.modifiedCount) {
                    setReview(data.data);
                    toast.success(data.message);
                    navigate('/my-reviews');
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='mt-10'>
            <h3 className='text-center font-bold text-2xl mb-7 text-yellow-700'>Update Your Review</h3>
            <form onSubmit={handleUpdate} className="flex flex-col gap-5 w-3/4 mx-auto lg:w-1/2 lg:mx-auto">
                <div className='flex gap-7'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="base3"
                                value="Service Name"
                            />
                        </div>
                        <TextInput
                            id="base3"
                            type="text"
                            name='type'
                            defaultValue={review.serviceName}
                            readOnly
                            sizing="md"
                        />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="base4"
                                value="Ratings"
                            />
                        </div>
                        <TextInput
                            id="base4"
                            type="text"
                            name='ratings'
                            defaultValue={review.ratings}
                            placeholder='Give a rating out of 5'
                            sizing="md"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="base5"
                            value="Review"
                        />
                    </div>
                    <TextInput
                        id="base5"
                        type="text"
                        name='message'
                        defaultValue={review.message}
                        placeholder='Leave a comment...'
                        sizing="md"
                    />
                </div>
                <Button type="submit" className='w-3/4 mx-auto' gradientMonochrome="success">Update Now</Button>
            </form>
        </div>
    );
};

export default UpdateReview;