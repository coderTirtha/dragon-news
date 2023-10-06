import { useContext } from 'react';
import logo from '../../../assets/logo.png';
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProviders/AuthProviders';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>Career</NavLink></li>
    </>
    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            toast.success('User logged out successfully!');
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} alt="" className='w-[180px]' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="rounded-full">
                                        {
                                            user ? 
                                            <img src={user?.photoURL} alt='user_image' ></img> :
                                            <FaRegUserCircle className='text-2xl'></FaRegUserCircle>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <NavLink to={'/profile'} className="justify-between">
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handleSignOut}><a>Logout</a></li>
                                </ul>
                            </div> :
                            <Link to={'/login'} className="btn btn-neutral">Login</Link>
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;