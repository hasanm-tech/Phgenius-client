import { Fade } from "react-awesome-reveal";
import { NavLink, Outlet } from "react-router-dom";
import { FaClipboardCheck,FaReadme,FaSimplybuilt,FaListAlt,FaIdCardAlt,FaCcAmazonPay,FaBuffer} from 'react-icons/fa';
const isAdmin = false;
const isInstructor = true;

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}

            

            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


            <Outlet></Outlet>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content space-y-4">

                {
                    isAdmin ?
                    <>
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl flex items-center space-x-4"> <FaListAlt></FaListAlt>  <Fade>
                     Manage Class
                    </Fade>    </NavLink>
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl flex items-center space-x-4"> <FaIdCardAlt></FaIdCardAlt>  <Fade>
                     Manage user
                    </Fade>    </NavLink>

                   
                    </>

                    :

                    <>
                    <NavLink to="/dashboard/selected-classes" className="p-2 bg-[#ba1a1ad3] text-xl flex items-center space-x-4"> <FaClipboardCheck></FaClipboardCheck>  <Fade>
                     My Selected Classes  
                    </Fade>    </NavLink>
                    <NavLink className="p-2 bg-[#ba1a1ad3]  text-xl flex items-center space-x-4"> <FaSimplybuilt></FaSimplybuilt>  <Fade>
                     Enrolled Class
                    </Fade>    </NavLink>

                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl flex items-center space-x-4"> <FaCcAmazonPay></FaCcAmazonPay>  <Fade>
                     payment
                    </Fade>    </NavLink>
                    
                    </>
                }
 <br /><br />
                {

                    isInstructor ? 
                    <>
                    <NavLink to='add-class' className="p-2 bg-[#ba1a1ad3] flex items-center space-x-4"> <FaReadme></FaReadme>  <Fade>
                     Add a class
                    </Fade>    </NavLink>

                    <NavLink to='my-classes' className="p-2 bg-[#ba1a1ad3] flex items-center space-x-4"> <FaBuffer></FaBuffer>  <Fade>
                    My classes
                    </Fade>    </NavLink>
                    
                    </> 
                    : 
                    <>
                    </>
                }

                {/* Sidebar content here */}
                
            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;