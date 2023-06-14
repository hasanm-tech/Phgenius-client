import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';

  useEffect(() => { 
    // Fetch class data from API
    fetch('http://localhost:5000/classes')
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => {
        console.error('Error fetching class data:', error);
      });
  }, []);

  // Ensure classes is an array before proceeding
  if (!Array.isArray(classes)) {
    return <p>No classes available</p>;
  }

  const handleSelect = classItem => {
    if(user){
      const savedClass = {className :classItem.name, price: classItem.price, instructor: classItem.instructor,email: user?.email}
      fetch('http://localhost:5000/all-classes', {
        method: "POST",
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(savedClass)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Class has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }

    else{
      Swal.fire({
        title: 'plese login ',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(from, {replace : true})
        }
      })
      
    }
  }

  return (
    <div className='container mx-auto py-40 text-center'>
      <h2 className='text-4xl font-semibold py-20'> All Classes </h2>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-20'>
      {classes.map((classItem) => (
        <>
        
        
        <div className='space-y-4' key={classItem._id}>
            <div>
                <img className='w-[373px] h-[249px] object-cover' src={classItem.img} alt="" />
            </div>
            <p className='text-xl font-semibold'>name: {classItem.name}</p>
            <p className='text-xl font-semibold'>instructor: {classItem.instructor}</p>
            <p>Price: {classItem.price}</p>
            <button onClick={() => handleSelect(classItem)} className='btn bg-neutral px-10 text-white'> Select </button>
        </div>

        </>
      ))}
      </div>
    </div>
  );
};

export default AllClasses;

