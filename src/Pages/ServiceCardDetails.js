import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { AuthContext } from '../AuthProvider/AuthProvider';
import AddReview from './AddReview';
import Review from './Review';


const ServiceCardDetails = () => {
    const { _id, title, price, image, message } = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div className='bg-white py-8 '>
            <div className='lg:flex'>
                <div className="card  bg-slate-400  card-compact py-2 mx-auto w-96 bg-white shadow-xl">
                    <figure><img className='w-72 h-72 rounded-md' src={image} alt="Shoes" /></figure>
                    <div className="card-body relative">
                        <h2 className="card-title text-black font-bold ">{title}</h2>
                        <p className='text-black font-semibold'>{message}</p>
                        <h2 className='font-bold text-black'>Price:{price}</h2>

                    </div>

                </div>

            </div>
            <div className='py-4'>
                <AddReview></AddReview>
            </div>
            <Review></Review>

        </div>
    );
};

export default ServiceCardDetails;