import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'


const Header = () => {
    return (
        <header>
            <div className="navbar bg-neutral py-6 fixed top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-x-4 space-y-4">

                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/all-instructor'>Instructors</NavLink>
                        <NavLink to='/all-classes'>Classes</NavLink>
                        <NavLink to='/Classes'>Dashboard</NavLink>
                        
                    </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className="md:w-1/2 w-1/3" style={{marginTop: '-18.5px'}}  src={logo} alt="" />
                    </a>
                </div>

                <div className="navbar-end text-white text-xl mr-4">
                    {
                        // user? <>
                        // <NavLink>
                        //     <img src={user.img} alt="" />
                        // </NavLink>
                        // </>
                        // : 
                        <NavLink to='/'> Login </NavLink>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;