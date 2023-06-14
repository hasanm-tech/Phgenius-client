import logo1 from '../../../assets/logo1.webp'
import logo2 from '../../../assets/logo2.webp'
import logo3 from '../../../assets/logo3.webp'
import logo4 from '../../../assets/logo4.webp'
import './Partners.css'

const Partners = () => {
    return (
        <div className="container m-auto py-20 ">

            <h2 className='text-4xl pb-10 pl-10'>Trusted by our awesome partners</h2>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 partner'>
                <img className='m-auto 'src={logo1} alt="" />
                <img className='m-auto'src={logo2} alt="" />
                <img className='m-auto'src={logo3} alt="" />
                <img className='m-auto'src={logo4} alt="" />
            </div>
        </div>
    );
};

export default Partners;