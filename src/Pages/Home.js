import React from 'react';
import './Home.css'
import Service from './Service';
import img2 from './home2.jpg';
const Home = () => {
    return (
        <div>
            {/* style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }} */}
            <div className="hero bg-white min-h-screen bg-image" >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Dr. MUHAMMAD AZIZ</h1>
                        <p className="mb-5 text-white">We will help you to feel better and enjoy every single day of your life</p>
                        <button className="btn btn-primary">READ MORE</button>
                    </div>
                </div>
            </div>

            {/* <div className='  bg-image align-items-center '>

                <div className=''>
                    <h2 className='text-orange-600'>Your Health Is Your Priority</h2>
                    <h3 className='mb-4 text-black font-bold text-4xl'>Dr. MUHAMMAD AZIZ</h3>
                    <h1 className='text-black text-2xl font-semibold'>We will help you to feel better and enjoy every single day of your life</h1>

                    <button className="btn btn-accent">READ MORE</button>
                </div>

            </div> */}
            <div className='bg-slate-100'>
                <div className="hero min-h-screen bg-slate-100">
                    <div className="hero-content flex-col lg:flex-row ">
                        <img src={img2} alt='' className="w-1/4 h-2/4 image-2 rounded-lg shadow-xl" />
                        <div className=''>
                            <h1 className="text-5xl font-bold text-black">Dr MUHAMMAD AZIZ</h1>
                            <p className="py-6  text-black">We provide the most full medical services so every person could have the opportunity <br /> to recived my help </p>
                            <p className="py-6  text-black">Cinical excellence. dversity and access to innovative technology are all hallmarks of the gradude <br /> medical educarion experince at carring doc. Our residents fellows. and renowened ataff <br /> share their experience working at caring Doc.</p>
                            <h3 className='font-semibold  text-black'>We try to do our best to help you and provide with a high-quality service.</h3>
                            <button className="btn btn-primary mt-5">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <Service></Service>
        </div>

    );
};

export default Home;