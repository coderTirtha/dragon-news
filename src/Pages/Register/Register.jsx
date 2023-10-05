import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                })
                .then(() => {
                    toast.success("User account created successfully!");
                })
                .catch(error => {
                    toast.error(error.message);
                })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-100 w-full max-w-md mx-auto shadow-lg rounded-lg px-8 py-16 my-16">
                <h2 className="text-3xl font-bold text-center mb-10">Register Your Account</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link to={'/login'} className="text-red-500 font-bold">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;