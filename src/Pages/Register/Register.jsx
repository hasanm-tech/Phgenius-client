import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const Register = () => {

    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const {creteUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()


    const onSubmit = data => {
        creteUser(data.email, data.pass)
        .then(result => {
            const user = result.user;
            console.log(user)
            updateUserProfile(data.name, data.photoURL)
            .then(() => {

                const saveUser = {name : data.name, email: data.email}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'user Created ',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        navigate('/')
                    }
                })
                
                
            })
            .catch(error => console.log(error))
        })
    }
    

    
    
    return (
        <section>
            <div className="hero min-h-screen bg-base-200 ">

                <div className="hero-content w-[400px] flex-col mb-10">
                        <h2 className="text-4xl font-bold my-10"> User Sign Up </h2>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">


                    <form  onSubmit={handleSubmit(onSubmit)}>

                    <div className="card-body">
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} name='name' placeholder="email" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" {...register("photo",{ required: true })}  name='photo' placeholder="Photo Url" className="input input-bordered" />
                        {errors.photo?.type === 'required' && <span className="text-red-600 my-2">This field is required</span>}
                        </div>




                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600 my-2">This field is required</span>}
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='pass' {...register("pass",{ 
                            required: true,
                            minLength:6, 
                            maxLength: 20,
                            pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} type="text" placeholder="password" className="input input-bordered" />

                        {errors.pass?.type === 'required' && <span className="text-red-600 my-2">This field is required</span>}
                        {errors.pass?.type === 'minLength' && <span className="text-red-600 my-2">password should must have 6 character</span>}
                        {errors.pass?.type === 'pattern' && <span className="text-red-600 my-2">At least one uppercase letter, one special character from the set [!@#$&*], one digit,one lowercase letter</span>}

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>

                        <div className="form-control mt-6">
                        <input className="btn" type="submit"  value="Sign Up" />
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;