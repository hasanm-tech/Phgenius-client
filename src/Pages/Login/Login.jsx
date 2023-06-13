import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Google from "../Shared/Google/Google";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("logged user from login", loggedUser);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'user login successfully',
            showConfirmButton: false,
            timer: 1500
          })
      })
      .catch((error) => {
        console.log("Error during sign in", error);
      });
  };

  return (
    <>
    <form className="w-1/3 m-auto pt-20 text-center" onSubmit={handleSubmit(onSubmit)}>
        
      <div className="space-y-4">
      <h2 className="py-5 text-2xl font-medium"> Login </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered"
          />
          {errors.email && <span className="text-error">Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input input-bordered"
          />
          {errors.password && <span className="text-error">Password is required</span>}
        </div>
        <div className="form-control">
          <button type="submit" className="btn text-white bg-neutral">
            Sign In
          </button>
        </div>
      </div>
      <p className="py-4">already user go to <button className="btn btn-xs"><Link to='/register'>Register</Link> </button></p>
    </form>

<div className="py-4">
<Google></Google>
</div>

</>
  );
};

export default Login;
