import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const {user} = useContext(AuthContext)
    const handleAddClass = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;      
        const instructor = form.instructor.value;      
        const email = form.email.value;      
        const img = form.img.value;      
        const seats = form.seats.value;   
        const price = form.price.value;   
             
        console.log(name,instructor,email,img,seats)

        const classInfo = {name : name, instructor:instructor, email:email, img:img, seats:seats, price:price}

        fetch('https://photogenius-server-hasanm-tech.vercel.app/add-classes', {
            method: "POST",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(classInfo)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
            <div className="hero-content w-full  flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleAddClass}>
                <div className="card-body">

                    <h2 className="py-10">Add A Class </h2>

                    <div className="form-control">
                    <input type="text" name="name" placeholder="class name " className="input input-bordered" />
                    </div>

                    <div className="form-control">
                    <input type="text" defaultValue={user?.displayName} placeholder="Instructor name" name="instructor" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                    <input type="text" defaultValue={user?.email} placeholder="Instructor name" name="email" className="input input-bordered" />
                    </div>



                    <div className="form-control">
                    <input name="img" type="text" placeholder="class img url" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                    <input name="seats" type="text" placeholder="Available seats" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                    <input name="price" type="text" placeholder="price" className="input input-bordered" />
                    </div>



                    <div className="form-control mt-6">
                    <button className="btn bg-neutral text-white">Add Class</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AddClass;