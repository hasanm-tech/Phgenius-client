import { NavLink, Outlet } from "react-router-dom";
const isAdmin = true;
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
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl" to='/dashboard/'>       Manage Class  </NavLink>
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl" to='/dashboard/'> Manage User  </NavLink>

                   
                    </>

                    :

                    <>
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl" to='/dashboard/'>       My Selected Classes  </NavLink>
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl" to='/dashboard/'> My Enrolled Classes</NavLink>

                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl" to='/dashboard/'> Payment:  </NavLink>
                    
                    </>
                }
 <br /><br />
                {

                    isInstructor ? 
                    <>
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl" to='/dashboard/'>       Add a Class  </NavLink>
                    <NavLink className="p-2 bg-[#ba1a1ad3] text-xl" to='/dashboard/'> My Classes </NavLink>
                    
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