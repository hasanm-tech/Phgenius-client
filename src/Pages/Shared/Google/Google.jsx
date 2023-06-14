import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from './../../../Provider/AuthProvider';
import Swal from "sweetalert2";

const Google = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleGoogle = () => {
        googleLogin()
        .then(res =>{
            const loggedUser = res.user;


            const savedUser = {name: loggedUser.displayName, email: loggedUser.email}

            
          fetch('http://localhost:5000/users', {
            method : "POST",
            headers : {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(savedUser)
          })
          .then(res => res.json())
          .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'user login successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, {replace : true})
          })




        })
        
    }
    return (
        <div className="py-10 text-center">
            <h2>Sign With <button onClick={handleGoogle} className="btn bg-neutral text-white"> Google</button></h2>
        </div>
    );
};

export default Google;