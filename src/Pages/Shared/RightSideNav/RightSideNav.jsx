import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProviders/AuthProviders';

const RightSideNav = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {
                user ?
                    '' :
                    <div className='mb-12'>
                        <h2 className="text-2xl font-semibold">Login With</h2>
                        <div className="my-4 flex flex-col justify-center items-center gap-2">
                            <button className="btn btn-outline w-full btn-info"><FcGoogle className='text-xl'></FcGoogle>Login With Google</button>
                            <button className="btn btn-outline w-full"><BsGithub className='text-xl'></BsGithub>Login With Github</button>
                        </div>
                    </div>
            }
            <div className='mb-12 space-y-4'>
                <h2 className="text-2xl font-semibold">Find Us On</h2>
                <div className='border border-gray-400 rounded-md'>
                    <p className='border-b border-b-gray-400 p-4'><a className='flex items-center gap-2'><BsFacebook className='text-xl'></BsFacebook> Facebook</a></p>
                    <p className='border-b border-b-gray-400 p-4'><a className='flex items-center gap-2'><BsTwitter className='text-xl'></BsTwitter> Twitter</a></p>
                    <p className='p-4'><a className='flex items-center gap-2'><BsInstagram className='text-xl'></BsInstagram> Instagram</a></p>
                </div>
            </div>
            <div className='bg-base-200 mb-12 p-4'>
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
                <div className='space-y-8'>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;