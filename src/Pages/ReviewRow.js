import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, }) => {
    const { _id, phone, customer, price, service, message } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        if (service) {
            fetch(`https://assignment-11-server-blush.vercel.app/services/${service}`)
                .then(res => res.json())
                .then(data => setReviewService(data));
        }
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        {message}
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{customer}</div>
                <div className="text-sm opacity-50">{phone}</div>
                <br />

            </td>
            <td><span className="badge badge-ghost badge-sm">${price}</span></td>
            <td>
                <div className="avatar">




                    {/* <div className="rounded w-24 h-24">
                        {
                            reviewService?.img &&
                            <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                    </div> */}
                </div>
            </td>
            {/* <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th> */}
        </tr>
    );
};

export default ReviewRow;