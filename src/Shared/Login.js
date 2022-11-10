import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState, } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
const Login = () => {


    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
    }
    const githubProvider = new GithubAuthProvider()
    const handleGithubProvider = () => {
        providerLogin(githubProvider)
    }
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    // const { login } = useContext(AuthContext);

    // const handleLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     login(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .then(error => console.log(error));
    // }


    return (
        <div>
            <div className="hero min-h-screen justify-center bg-slate-100">

                <div className="hero-content ">

                    <div className="text-center ">


                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
                        <h1 className="text-5xl font-bold text-black">Login now!</h1>
                        <form onSubmit={handleSubmit} className="card-body  bg-white">

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
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            {error}
                        </form>
                        <p className='text-black font-semibold'>Have an Account! <Link to='/singup'><span className='font-bold text-orange-600'>Sing Up</span></Link></p>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline text-black mr-1"><FaGoogle></FaGoogle>Login with Google</button>
                            <button onClick={handleGithubProvider} className="btn btn-outline text-black"><FaGithub></FaGithub>Login with Github</button>
                        </div>
                    </div>


                    {/* <Button  className='mb-2' variant='outline-primary'></Button> */}
                    {/* <Button  variant="outline-dark"></Button>
 */}


                </div>
            </div>
        </div>
    );
};

export default Login;