import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-blush.vercel.app/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='bg-white pb-4'>
            <div className='text-center pt-5'>

                <h1 className='text-5xl font-semibold text-black'>My Service Area</h1>
                <p className='text-black py-2 font-semibold text-2xl'>Talk To Expert Now! Expert Diet Counselors. 15+ Yrs of Happy Clients. Book Appointment.</p>
            </div>
            <div className='grid gap-5  my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    service.map(service => <ServiceCard
                        key={service._id} service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/allcard'><button className="btn   h-px btn-primary">Show All</button></Link>
        </div>
    );
};

export default Service;