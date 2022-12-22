import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { Link } from 'react-router-dom';



const ServiceCard = ({ service }) => {
    const { _id, title, price, image, message } = service;
    console.log(service)
    return (

        <div>
            <div className="card  bg-zinc-700  card-compact py-5  w-96 bg-white shadow-xl">

                <PhotoProvider>
                    <PhotoView src={image}>
                        <figure><img className='w-72 h-72 rounded-md' src={image} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body relative">
                    <h2 className="card-title text-black font-bold ">{title}</h2>
                    <p className='text-black font-semibold'>{message?.slice(0, 100) + '..'}</p>
                    <h2 className='font-bold text-black'>Price:{price}</h2>
                    <div className="card-actions justify-center">
                        <Link to={`/servicecarddetails/${_id}`}><button className="btn  w-full h-px btn-primary">View Details</button></Link>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default ServiceCard;