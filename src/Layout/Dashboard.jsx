import { Fade } from "react-awesome-reveal";
import { NavLink, Outlet } from "react-router-dom";
import { FaClipboardCheck,FaReadme,FaSimplybuilt,FaListAlt,FaIdCardAlt,FaCcAmazonPay,FaBuffer} from 'react-icons/fa';
const isAdmin = true;
const isInstructor = true;
const isStudent = true;

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
            <ul className="menu p-4 w-70 h-full bg-base-200 text-base-content space-y-2">

                {
                    isAdmin ?
                    <>
                    <h2 className="py-2 text-xl font-bold">admin panel</h2>
                    <NavLink to='manage-classes' className="p-2 bg-[#ba1a1ad3] text-xl flex items-center space-x-4"> <FaListAlt></FaListAlt>  <Fade>
                     Manage Class
                    </Fade>    </NavLink>
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl flex items-center space-x-4"> <FaIdCardAlt></FaIdCardAlt>  <Fade>
                     Manage user
                    </Fade>    </NavLink>

                   
                    </>

                    :

                    <>
                    
                    
                    </>
                }

                <br /><br />
                <hr />

                {
                    isStudent ?
                    
                   <>
                   <h2 className="py-2 text-xl font-bold">Student panel</h2>
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

                    :
                    <>
                    </>
                }
                <hr />
 <br /><br />
                {

                    isInstructor ? 
                    <>
                     <h2 className="py-2 text-xl font-bold">instructor panel</h2>
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