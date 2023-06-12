import { useEffect, useState } from 'react';

const Instructors = () => {
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

  // Sort classes based on the number of students in descending order
  const sortedClasses = [...classes].sort((a, b) => b.students - a.students);

  // Get the top 6 classes
  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className='container mx-auto py-20 text-center'>
      <h2 className='text-4xl font-semibold py-10'> Top Instructors </h2>
      <div className='grid grid-cols-3 gap-20'>
      {topClasses.map((classItem) => (
        <>
        

        <div className='space-y-4' key={classItem.id}>
            <div>
                <img className='w-[373px] h-[249px] object-cover' src={classItem.mentor} alt="" />
            </div>
            <p className='text-xl font-semibold'>Instructor: {classItem.instructor}</p>
            <p>Students: {classItem.students}</p>
        </div>

        </>
      ))}
      </div>
    </div>
  );
};

export default Instructors;
