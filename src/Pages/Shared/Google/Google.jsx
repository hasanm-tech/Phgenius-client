import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './../../../Provider/AuthProvider';
import Swal from "sweetalert2";

const Google = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleLogin()
        .then(res =>{
            const loggedUser = res.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'user login successfully',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')

        //     const savedUser = {name: loggedUser.displayName, email: loggedUser.email}

            
        //   fetch('http://localhost:5000/users', {
        //     method : "POST",
        //     headers : {
        //       'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(savedUser)
        //   })
        //   .then(res => res.json())
        //   .then(() => {
        //         navigate('/')
        //   })
        
        })
        
    }
    return (
        <div className="py-10">
            <h2>Sign With ------ <button onClick={handleGoogle} className="btn  bg-red-800"> Google</button></h2>
        </div>
    );
};

export default Google;