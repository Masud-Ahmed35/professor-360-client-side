import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:7007/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                if (data.success) {
                    setMyReviews(data.data);
                }
            })

    }, [user?.email])

    const handleDeleteReview = id => {
        const confirmation = window.confirm('Are you sure, You want to delete this review?');

        if (confirmation) {
            fetch(``, {
                method: 'DELETE'
            })
        }
    }

    return (
        <div className='my-10'>
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
                        ></MyReviewsRow>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyReviews;