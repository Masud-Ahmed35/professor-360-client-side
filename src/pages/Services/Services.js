import { Button, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    useTitle('Services');

    useEffect(() => {
        fetch(`http://localhost:7007/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data);
                    setLoading(false);
                    setCount(data.count);
                }
                else {
                    toast.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))

    }, [page, size])

    if (loading) {
        return <div className="flex justify-center my-10">
            <Button color="gray">
                <Spinner aria-label="Alternate spinner button example" size='xl' />
                <span className="pl-3 text-lg">
                    Loading.....
                </span>
            </Button>
        </div>
    }

    // -------------Pagination--------
    const pages = Math.ceil(count / size);

    return (
        <div className='my-7'>
            <h2 className='text-center text-4xl font-bold mb-10'>Our Services</h2>
            <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='my-10 ml-5'>

                {
                    [...Array(pages).keys()].map(index => <button
                        key={index}
                        onClick={() => setPage(index)}
                        className={page === index ? 'bg-amber-500 text-white px-3 py-1 rounded-full' : 'bg-slate-300 mx-3 px-3 py-1'}
                    >
                        {index + 1}
                    </button>)
                }
                <select onChange={e => setSize(e.target.value)} className='ml-5'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
    );
};

export default Services;