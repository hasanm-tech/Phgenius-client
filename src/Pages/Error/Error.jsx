import { Link } from 'react-router-dom';
import error from '../../assets/000-404.png'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';


const Error = () => {
    return (
        <div className='flex justify-center flex-col items-center pt-10'>
                <img className='w-1/2 object-cover m-auto' src={error} alt="" />

                <div className='py-10'>
                
                    <h2 className='text-2xl font-bold'><Link to='/'>
                    <FaLongArrowAltLeft></FaLongArrowAltLeft>

                        <Fade>Back to Home</Fade></Link> </h2>
                </div>
        </div>
    );
};

export default Error;