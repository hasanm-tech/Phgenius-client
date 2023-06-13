import { useEffect, useState } from 'react';

const AllClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch class data from API
    fetch('classes.json')
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


  return (
    <div className='container mx-auto py-40 text-center'>
      <h2 className='text-4xl font-semibold py-20'> All Classes </h2>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-20'>
      {classes.map((classItem) => (
        <>
        

        <div className='space-y-4' key={classItem.id}>
            <div>
                <img className='w-[373px] h-[249px] object-cover' src={classItem.img} alt="" />
            </div>
            <p className='text-xl font-semibold'>name: {classItem.name}</p>
            <p className='text-xl font-semibold'>instructor: {classItem.instructor}</p>
            <p>Price: {classItem.price}</p>
            <button className='btn bg-neutral px-10 text-white'> Select </button>
        </div>

        </>
      ))}
      </div>
    </div>
  );
};

export default AllClasses;

