import { useEffect, useState } from 'react';

const AllInstructors = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch class data from API
    fetch('classes.json')
      .then((response) => response.json())
      .then((data) => {
        setClasses(data.classes);
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
      <h2 className='text-4xl font-semibold py-20'> Top Instructors </h2>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-20'>
      {classes.map((instructor) => (
        <>
        

        <div className='space-y-4' key={instructor.id}>
            <div>
                <img className='w-[373px] h-[249px] object-cover' src={instructor.mentor} alt="" />
            </div>
            <p className='text-xl font-semibold'>Instructor: {instructor.instructor}</p>
            <p>Students: {instructor.email}</p>
        </div>

        </>
      ))}
      </div>
    </div>
  );
};

export default AllInstructors;

