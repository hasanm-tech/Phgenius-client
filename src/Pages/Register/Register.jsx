import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from './../../Provider/AuthProvider';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { signUp, userUpdate } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      setPasswordError("Password and confirm password do not match");
      return;
    }

    if (data.password.length < 6) {
      setPasswordError("Password should be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(data.password)) {
      setPasswordError("Password should contain at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*]/.test(data.password)) {
      setPasswordError("Password should contain at least one special character");
      return;
    }

    signUp(data.email, data.password)
      .then((result) => {
        console.log(result);
        const loggedUser = result.user;
        console.log("logged user from register", loggedUser);
        userUpdate(data.name, data.photo)
        .then(() => {
          // const savedUser = {name: data.name, email: data.email}
          // fetch('http://localhost:5000/users', {
          //   method : "POST",
          //   headers : {
          //     'content-type' : 'application/json'
          //   },
          //   body: JSON.stringify(savedUser)
          // })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'user login successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => console.log(err))

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'user login successfully',
            showConfirmButton: false,
            timer: 1500
          })
      })
      .catch((error) => {
        console.log("Error during sign up", error);
      });
  };

  

  const password = watch("password");

  return (
    <div className="hero min-h-screen bg-base-200">
       
      <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
     
        <div className="card flex-shrink-0 w-full text-center shadow-2xl bg-base-100">
        <h2 className="py-10 text-2xl font-medium">Register </h2>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-error">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-error">Password is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match"
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-error">{errors.confirmPassword.message}</span>
                )}
              </div>
              {passwordError && <span className="text-error">{passwordError}</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="text-error">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo")}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn  text-white bg-neutral" type="submit">
                  Sign Up
                </button>
              </div>

              <p>already user go to <button className="btn btn-xs"><Link to='/login'>Login</Link> </button></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
