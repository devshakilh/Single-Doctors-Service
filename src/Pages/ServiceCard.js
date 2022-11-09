import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, price, img, short_des } = service;


    return (

        <div>
            <div className="card bg-slate-400  card-compact py-5 mx-5 w-96 bg-white shadow-xl">
                <figure><img className='w-72 h-72 rounded-md' src={img} alt="Shoes" /></figure>
                <div className="card-body relative">
                    <h2 className="card-title text-black font-bold ">{title}</h2>
                    <p className='text-black font-semibold'>{short_des.slice(0, 100)}..</p>
                    <h2 className='font-bold text-black'>Price:{price}</h2>
                    <div className="card-actions justify-center">
                        <Link to={`servicecarddetails/${_id}`}><button className="btn  w-full h-px btn-primary">View Details</button></Link>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default ServiceCard;