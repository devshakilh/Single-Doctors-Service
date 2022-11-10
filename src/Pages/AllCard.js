import React, { useEffect, useState } from 'react';

import AllCards from './AllCards';
const AllCard = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-blush.vercel.app/servicess')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='bg-white'>
            <div className='text-center pt-5'>

                <h1 className='text-5xl font-semibold text-black'>My Service Area</h1>
                <p className='text-black py-2 font-semibold text-2xl'>Talk To Expert Now! Expert Diet Counselors. 15+ Yrs of Happy Clients. Book Appointment.</p>
            </div>
            <div className='grid gap-5  my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    service.map(service => <AllCards
                        key={service._id} service={service}
                    ></AllCards>)
                }
            </div>

        </div>
    );
};

export default AllCard;