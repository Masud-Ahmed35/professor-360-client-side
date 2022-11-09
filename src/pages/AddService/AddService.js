import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddService = () => {

    const handleAddService = event => {

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
                            sizing="md"
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
                            sizing="md"
                        />
                    </div>
                </div>
                <div className='flex gap-7'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="base3"
                                value="Type"
                            />
                        </div>
                        <TextInput
                            id="base"
                            type="text"
                            name='type'
                            sizing="md"
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
                            sizing="md"
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
                        sizing="md"
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