import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Login from '../Shared/Login';

const AddReview = () => {

    const { _id, title, price, image, short_des } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user);
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
            // service: price,
            customer: name,
            phone,
            email,
            message,
            title,
            image

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
                    toast.success('Review Placed Successfully')
                    form.reset();
                }
            })

            .catch(err => console.error(err));
    }
    return (
        <div>
            <form onSubmit={handlePlaceReview} className='bg-slate-200 py-4'>
                {/* <h2 className='text-4xl text-black my-4 text-semibold'>You are about Review: {title}</h2> */}
                <ToastContainer />
                <div className='grid grid-cols-1 ml-10 lg:grid-cols-2 gap-4 '>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='email' type="text" placeholder="Your email" readOnly defaultValue={user?.email} className="input input-bordered input-info required: w-full max-w-xs" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-info w-full max-w-xs" />


                </div>

                <textarea className="textarea h-24 w-full textarea-accent" name='message' placeholder="Your Message" required></textarea>
                <div>
                    {
                        user ? <div> <input className=' btn text-white' type="submit" value="Your Review" /></div>
                            :
                            <div><Link to='/login'><button className='text-4xl text-black btn btn-accent'>Login</button></Link></div>
                    }
                </div>
            </form>
        </div>
    );
};

export default AddReview;