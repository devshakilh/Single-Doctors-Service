// import React, { useContext } from 'react';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import AddReview from './AddReview';
// import { useLoaderData } from 'react-router-dom';
// const AllCardDetails = () => {
//     const { _id, title, price, img, short_des } = useLoaderData();
//     const { user } = useContext(AuthContext);

//     return (
//         <div className='bg-white py-8 '>
//             <div className='lg:flex'>
//                 <div className="card  bg-slate-400  card-compact py-2 mx-auto w-96 bg-white shadow-xl">
//                     <figure><img className='w-72 h-72 rounded-md' src={img} alt="Shoes" /></figure>
//                     <div className="card-body relative">
//                         <h2 className="card-title text-black font-bold ">{title}</h2>
//                         <p className='text-black font-semibold'>{short_des}</p>
//                         <h2 className='font-bold text-black'>Price:{price}</h2>

//                     </div>

//                 </div>
//                 <div className="card  bg-slate-400  card-compact py-2 mx-auto w-96 bg-white shadow-xl">
//                     <figure><img className='w-72 h-72 rounded-md' src={img} alt="Shoes" /></figure>
//                     <div className="card-body relative">
//                         <h2 className="card-title text-black font-bold ">{title}</h2>
//                         <p className='text-black font-semibold'>{short_des}</p>
//                         <h2 className='font-bold text-black'>Price:{price}</h2>

//                     </div>

//                 </div>
//             </div>

//             <div className='py-4'>
//                 <AddReview></AddReview>
//             </div>
//         </div>
//     );
// };

// export default AllCardDetails;