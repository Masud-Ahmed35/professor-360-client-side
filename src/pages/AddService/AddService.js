import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add-Service');

    const setTime = new Date();
    const time = setTime.getTime();

    const handleAddService = event => {
        event.preventDefault();
        const service = {
            name: event.target.serviceName.value,
            price: event.target.price.value,
            type: event.target.type.value,
            duration: event.target.duration.value,
            image: event.target.image.value,
            description: event.target.description.value,
            time: time
        }
        fetch(`https://assignment-11-server-mu.vercel.app/add-service`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.insertedId) {
                    toast.success(data.message);
                    event.target.reset();
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='mt-10'>
            <h3 className='text-center font-bold text-2xl mb-7 text-yellow-700'>Add a New Service</h3>
            <form onSubmit={handleAddService} className="flex flex-col gap-5 w-3/4 mx-auto lg:w-1/2 lg:mx-auto">
                <div className='flex gap-7'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="base1"
                                value="Service Name"
                            />
                        </div>
                        <TextInput
                            id="base1"
                            type="text"
                            name='serviceName'
                            placeholder='Type your service name'
                            sizing="md"
                            required={true}
                        />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="base2"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            id="base2"
                            type="text"
                            name='price'
                            placeholder='Price'
                            sizing="md"
                            required={true}
                        />
                    </div>
                </div>
                <div className='flex gap-7'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="base3"
                                value="Service Type"
                            />
                        </div>
                        <TextInput
                            id="base3"
                            type="text"
                            name='type'
                            placeholder='Example: Easy, Hard, Advanced'
                            sizing="md"
                            required={true}
                        />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="base4"
                                value="Duration"
                            />
                        </div>
                        <TextInput
                            id="base4"
                            type="text"
                            name='duration'
                            placeholder='Enter duration as days'
                            sizing="md"
                            required={true}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="base5"
                            value="Image URL"
                        />
                    </div>
                    <TextInput
                        id="base5"
                        type="text"
                        name='image'
                        placeholder='Enter services image url'
                        sizing="md"
                        required={true}
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Service Description"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        name='description'
                        placeholder="Write your service description"
                        required={true}
                        rows={4}
                    />
                </div>
                <Button type="submit" className='w-3/4 mx-auto' gradientMonochrome="success">Add Your Service</Button>
            </form>
        </div>
    );
};

export default AddService;