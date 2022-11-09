import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Service from '../../Service/Service';

const HomeCard = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:7007/home-services`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data)
                }
                else {
                    toast.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))

    }, [])

    return (
        <div className='my-12'>
            <h2 className='text-center text-3xl font-bold mb-8'>Our Popular Services</h2>
            <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeCard;