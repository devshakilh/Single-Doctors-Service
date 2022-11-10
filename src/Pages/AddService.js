import React, { useContext, } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AddServiceCard from './AddServiceCard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const { user } = useContext(AuthContext);
    // const [add, setAdd] = useState([])


    const handlePlaceAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const price = form.price.value;
        const message = form.message.value;
        const image = form.image.value;
        const title = form.title.value;
        const add = {
            // service: _id,
            // serviceName: title,
            // service: price,
            customer: name,
            price,
            email,
            message,
            image,
            title


        }

        fetch('https://assignment-11-server-blush.vercel.app/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("add placed Successfully!");
                    form.reset();
                }
            })

            .catch(err => console.error(err));
    }
    return (
        <div>

            <form onSubmit={handlePlaceAdd} className='bg-slate-200 py-4'>
                {/* <h2 className='text-4xl text-black my-4 text-semibold'>You are about Review: {title}</h2> */}

                <div className='grid grid-cols-1 ml-10 lg:grid-cols-2 gap-4 '>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered input-info required: w-full max-w-xs" />
                    <input name='price' type="text" placeholder="price" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='image' type="text" placeholder="image url" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='title' type="text" placeholder="service Name" required className="input input-bordered input-info w-full max-w-xs" />


                </div>

                <textarea className="textarea h-24 w-full textarea-accent" name='message' placeholder="Your Message" required></textarea>
                <input className=' btn text-white' type="submit" value="Add Service" />
            </form>
            <AddServiceCard></AddServiceCard>
        </div>
    );

};

export default AddService;