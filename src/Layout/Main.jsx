import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {

    const location = useLocation()
    const simpleLayout = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {simpleLayout || <Header></Header>}
            
            <Outlet></Outlet>
            {simpleLayout || <Footer></Footer>}
        </div>
    );
};

export default Main;