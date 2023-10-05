import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success("User logged in successfully!");
            setTimeout(() => {
                navigate(location?.state ? location.state : '/')
            }, 2000)
        })
        .catch(error => {
            toast.error(error.message);
        })
    } 
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-100 w-full max-w-md mx-auto shadow-lg rounded-lg px-8 py-16 my-16">
                <h2 className="text-3xl font-bold text-center mb-10">Login Your Account</h2>
                <form onSubmit={handleLogIn}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Don't have an account? <Link to={'/register'} className="text-red-500 font-bold">Register</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;