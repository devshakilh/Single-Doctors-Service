import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { toast } from 'react-toastify';


const SignUp = () => {


    const [error, setError] = useState('');

    const { createUser, updateUserProfile, } = useContext(AuthContext);


    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
    }
    const githubProvider = new GithubAuthProvider()
    const handleGithubProvider = () => {
        providerLogin(githubProvider)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        // const photoURL = form.photoURL.value;

        const password = form.password.value;
        // console.log(name, photoURL, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();


                toast.success('Login sucessfully')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }



    // const { createUser } = useContext(AuthContext);
    // const handleSignUp = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(err => console.error(err));
    // }



    return (
        <div className="hero  justify-center  bg-slate-100">
            <div className="hero-content grid gap-10  ">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src='' alt="" />
                </div>
                <div className="card flex-shrink-0  my-10 w-full max-w-sm shadow-2xl  ">
                    <h1 className="text-5xl text-center text-black font-bold">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="card-body  bg-white">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-5">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        {error}
                    </form>
                    <p className='text-center text-black'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline text-black mr-1"><FaGoogle></FaGoogle>Login with Google</button>
                        <button onClick={handleGithubProvider} className="btn btn-outline text-black"><FaGithub></FaGithub>Login with Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;