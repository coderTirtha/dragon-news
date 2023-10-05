import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 my-8'>
            <img src={logo} alt="" />
            <p className='text-[#706F6F]'>Journalism without Fear or Favour</p>
            <p className='text-[#403F3F]'>{moment().format('MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;