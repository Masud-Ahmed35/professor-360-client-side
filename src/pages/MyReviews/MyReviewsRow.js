import { Button, Table } from 'flowbite-react';
import React from 'react';

const MyReviewsRow = ({ myReview, handleDeleteReview, handleUpdateReview }) => {
    const { _id, serviceName, ratings, message } = myReview;

    return (
        <Table.Row className="border-gray-300">
            <Table.Cell className="font-medium text-gray-900">
                {serviceName}
            </Table.Cell>
            <Table.Cell>
                {ratings}
            </Table.Cell>
            <Table.Cell>
                {message}
            </Table.Cell>
            <Table.Cell>
                <Button onClick={() => handleUpdateReview(_id)} color="success" pill={true}>Update</Button>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={() => handleDeleteReview(_id)} color="failure" pill={true}>Delete</Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyReviewsRow;