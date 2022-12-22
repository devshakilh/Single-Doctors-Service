import React from 'react';
import './Home.css'
import Service from './Service';
import img2 from './home2.jpg';
const Home = () => {
    return (
        <div>
            <div className="hero bg-white grid grid-flow-row min-h-screen bg-image" style={{ backgroundImage: `url("https://i.ibb.co/Cv2KFJm/doctor.jpg")` }} >
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
            {/* <div className="card lg:card-side shadow-xl  my-6">
                <div className='grid  bg-zinc-700  grid-cols-1 gap-2   lg:w-1/2 lg:grid-cols-2'>
                    <div >
                        <figure><img className='lg:h-72  lg:w-72 h-96 w-96   mb-6' src="https://i.ibb.co/jWqV6D6/534-14-070-921x.webp" alt="Album" /></figure>
                        <figure><img className='lg:h-72 mb-4 lg:w-72 h-96 w-96' src="https://i.ibb.co/qxqfsBT/banner3.jpg" alt="Album" /></figure>
                    </div>
                    <div>
                        <figure><img className='mb-6  lg:h-72 lg:w-72 h-96 w-96' src="https://i.ibb.co/tM1Y0GT/W020220418469705137506-350.jpg" alt="Album" /></figure>
                        <figure><img className='lg:h-72 lg:w-72 h-96 w-96' src="https://i.ibb.co/vQZn1mN/images.jpg" alt="Album" /></figure>
                    </div>
                </div>

                <div className="card-body content-center lg:w-1/2">
                    <h1 className="text-5xl font-bold ">Non-Frost Refrigerator!</h1>
                    <p className="py- text-black">Direct Cool Refrigerator
                        Welcome to an experience of freshness. WALTON Direct Cool Refrigerators are equipped with 100% copper condensers and Nano technology to take care of your evolving needs and at the same time</p>
                    <p className="py-6">
                        When you have Walton refrigerator & freezer in your home you are safe from going to market every day that keeps you free from extra burden. You can keep all your foods and stuffs fresh for long. Our energy-saving, </p>

                </div>
            </div> */}
            <div>
                <div className="card lg:card-side shadow-xl  my-6">
                    <div className='grid  bg-zinc-700  grid-cols-1    lg:w-1/2 lg:grid-cols-2'>
                        <div >
                            <figure><img className='lg:h-72  lg:w-64 h-96 w-96 my-4  ' src="https://media.self.com/photos/57d88c4e50778cef321a46f7/master/pass/natural-c-section_feat.jpg" alt="Album" /></figure>
                            <figure><img className='lg:h-72 mb-4 lg:w-64 h-96 w-96' src="https://myvision.org/wp-content/uploads/2022/02/woman-having-laser-eye-surgery.jpg" alt="Album" /></figure>
                        </div>
                        <div>
                            <figure><img className='my-4 lg:h-72 lg:w-64 h-96 w-96 ' src="https://www.researchgate.net/publication/333327709/figure/fig2/AS:766017164832772@1559644132573/Trocar-position-for-laparoscopic-liver-resection-Surgery-was-performed-by-the-insertion.jpg" alt="Album" /></figure>
                            <figure><img className='lg:h-72 lg:w-64 h-96 w-96' src="https://www.jaohns.com/wp-content/uploads/2019/10/operation-80124_640.jpg" alt="Album" /></figure>
                        </div>
                    </div>

                    <div className="card-body text-black content-center lg:w-1/2">
                        <h1 className="text-5xl font-bold ">Non-Frost Refrigerator!</h1>
                        <p className="py-6">Direct Cool Refrigerator
                            Welcome to an experience of freshness. WALTON Direct Cool Refrigerators are equipped with 100% copper condensers and Nano technology to take care of your evolving needs and at the same time, maintain the quality of the food that you preserve</p>
                        <p className="py-6">When you have Walton refrigerator & freezer in your home you are safe from going to market every day that keeps you free from extra burden. You can keep all your foods and stuffs fresh for long. Our energy-saving, </p>

                    </div>
                </div>
            </div>
            <div className='bg-slate-100'>


                <div className="hero min-h-screen bg-slate-100">
                    <div className="hero-content flex-col lg:flex-row  ">
                        <img src={img2} alt='' className="w-1/4 h-2/4 image-2 lg:mr-6 rounded-lg shadow-xl" />
                        <div className='lg:ml-10'>
                            <h1 className="text-5xl font-bold text-black">Dr MUHAMMAD AZIZ</h1>
                            <h1 className="py-6  text-black">
                                We provide the most full medical services so every person could have the opportunity  to recived my help </h1>
                            <h1 className="py-6  text-black">
                                Cinical excellence. dversity and access to innovative technology are all hallmarks of the gradude  medical education
                                experince at carring doc. Our residents fellows. and renowened ataff  share their experience working at caring Doc.
                            </h1>
                            <h3 className='font-semibold  text-black'>
                                We try to do our best to help you and provide with a high-quality service.
                            </h3>
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