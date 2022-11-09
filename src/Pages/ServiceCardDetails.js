import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { AuthContext } from '../AuthProvider/AuthProvider';
const ServiceCardDetails = () => {
    const { _id, title, price, img, short_des } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,

            customer: name,
            phone,
            message
        }

        fetch('https://assignment-11-server-blush.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Placed Successfully')
                    form.reset();
                }
            })

            .catch(err => console.error(err));
    }
    return (
        <div className='bg-white py-12 '>
            <div className="card  bg-slate-400  card-compact py-5 mx-auto w-96 bg-white shadow-xl">
                <figure><img className='w-72 h-72 rounded-md' src={img} alt="Shoes" /></figure>
                <div className="card-body relative">
                    <h2 className="card-title text-black font-bold ">{title}</h2>
                    <p className='text-black font-semibold'>{short_des}</p>
                    <h2 className='font-bold text-black'>Price:{price}</h2>

                </div>

            </div>
            <form onSubmit={handlePlaceReview}>
                <h2 className='text-4xl text-black my-4 text-semibold'>You are about Review: {title}</h2>

                <div className='grid grid-cols-1 ml-10 lg:grid-cols-2 gap-4 '>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='email' type="text" placeholder="Your email" className="input input-bordered input-info required: w-full max-w-xs" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-info w-full max-w-xs" />


                </div>

                <textarea className="textarea h-24 w-full textarea-accent" name='message' placeholder="Your Message" required></textarea>
                <input className=' btn text-white' type="submit" value="Your Review" />
            </form>
        </div>
    );
};

export default ServiceCardDetails;