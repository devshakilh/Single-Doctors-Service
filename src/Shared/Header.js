import React, { useContext } from 'react';
import imgNav from './drnav.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='mr-2' to='/home'>Home</Link></li>
                            <li><Link to='/blog'>Add Review</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/service'>My Service</Link></li>
                        </ul>
                    </div>
                    <span><img className='image-size pl-12 ' src={imgNav} alt="" /></span>
                    <a className="btn btn-ghost text-white normal-case text-xl"><Link to='/'>Dr.Muhammad Aziz</Link></a>

                </div>
                <div className="navbar-center text-white hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        <li tabIndex={0}>

                        </li>
                        <li><Link className='mr-2' to='/'>Home</Link></li>
                        <li><Link to='/blog'>Add Review</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/service'>My Service</Link></li>
                        {/* <li><Link to='/login'>Login</Link></li> */}
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {/* <span>{user?.displayName}</span> */}
                                        <button variant="light" onClick={handleLogOut}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <li> <Link to='/login'>Login</Link></li>
                                        <li> <Link to='/singup' >SingUp</Link></li>
                                    </>
                            }


                        </>
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div >
    );
};

export default Header;