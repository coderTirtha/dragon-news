import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Navbar from "../Shared/Navbar/Navbar";

const Profile = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = (e) => {
        e.preventDefault();
        signOutUser()
            .then(() => {
                console.log('User logged out successfully!')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-md mx-auto w-full bg-base-100 shadow-md rounded-lg p-4">
                <img src={user?.photoURL} alt="" className="w-[100px] mx-auto" />
                <h3 className="text-2xl font-semibold text-center">{user?.displayName}</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" value={user?.email} className="input input-bordered text-gray-500" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" value={user?.photoURL} className="input input-bordered text-gray-500" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User ID</span>
                    </label>
                    <input type="text" name="uid" value={user?.uid} className="input input-bordered text-gray-500" readOnly />
                </div>
                <div className="form-control mt-8">
                    <button onClick={() => document.getElementById('log-out').showModal()} className="btn btn-outline btn-error">Log Out</button>
                    <dialog id="log-out" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <p className="py-4">Are you sure you want to log out?</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <div className="flex gap-4">
                                        <button onClick={handleSignOut} className="btn btn-error text-white">Ok</button>
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('log-out').close();
                                        }} className="btn">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Profile;