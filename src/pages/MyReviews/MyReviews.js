import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    useTitle('My-Reviews');
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:7007/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setMyReviews(data.data);
                    setCount(data.data.length);
                }
            })

    }, [user?.email, refresh])


    const handleUpdateReview = id => {
        navigate(`/update-review/${id}`);
    }

    const handleDeleteReview = id => {
        const confirmation = window.confirm('Are you sure, You want to delete this review?');

        if (confirmation) {
            fetch(`http://localhost:7007/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.data.deletedCount) {
                        toast.success(data.message);
                        setRefresh(!refresh);
                    }
                })
                .catch(error => toast.error(error.message));
        }
    }

    return (
        <div className='my-10'>
            {
                count ?
                    <>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>
                                    Service Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Ratings
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Review
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Update Action
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Delete Action
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    myReviews.map(myReview => <MyReviewsRow
                                        key={myReview._id}
                                        myReview={myReview}
                                        handleDeleteReview={handleDeleteReview}
                                        handleUpdateReview={handleUpdateReview}
                                    ></MyReviewsRow>)
                                }
                            </Table.Body>
                        </Table>
                    </>
                    :
                    <div className='flex justify-center items-center my-60'>
                        <h1 className='text-2xl font-bold lg:text-5xl text-gray-500'>---No Review Given Yet---</h1>
                    </div>
            }
        </div>
    );
};

export default MyReviews;