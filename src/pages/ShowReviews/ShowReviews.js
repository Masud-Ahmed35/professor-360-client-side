import { Avatar, Table } from 'flowbite-react';
import React from 'react';

const ShowReviews = ({ allReview }) => {
    const { userName, email, photo, message, ratings, serviceName, } = allReview;

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium">
                <Avatar
                    img={photo}
                    rounded={true}
                >
                    <div className="space-y-1 font-bold text-black">
                        <div>
                            {userName}
                        </div>
                        <small className="text-sm text-gray-500">
                            {email}
                        </small>
                    </div>
                </Avatar>
            </Table.Cell>
            <Table.Cell>
                {serviceName}
            </Table.Cell>
            <Table.Cell>
                {ratings}
            </Table.Cell>
            <Table.Cell>
                {message}
            </Table.Cell>
        </Table.Row>
    );
};

export default ShowReviews;