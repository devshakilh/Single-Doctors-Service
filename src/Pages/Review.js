import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-11-server-blush.vercel.app/review?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setReview(data))
        }
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://assignment-11-server-blush.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = review.filter(odr => odr._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }



    return (
        <div>
            <h2 className="text-5xl text-black py-12">You have {review.length} Review</h2>

            {
                user?.uid ?
                    <>
                        <div className="overflow-x-auto w-full my-2">

                            <table className="table w-full">
                                <ToastContainer />
                                <thead>
                                    <tr>
                                        <th>
                                            Delete
                                        </th>
                                        <th>Message</th>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        review.map(review => <ReviewRow
                                            key={review._id}
                                            review={review}
                                            handleDelete={handleDelete}

                                        ></ReviewRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <>


                    </>
            }


        </div>
    );
};

export default Review;