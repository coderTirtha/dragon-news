import logo from '../../../assets/logo.png';
import { FaRegUserCircle } from 'react-icons/fa';
const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Career</a></li>
    </>
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
                    <a className="btn btn-neutral">Login</a>
                    <button><FaRegUserCircle className='text-2xl'></FaRegUserCircle></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;