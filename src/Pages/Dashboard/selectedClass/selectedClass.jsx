
import Swal from 'sweetalert2';
import useClasses from './../../../Hooks/useClasses';
import { FaRegTrashAlt } from 'react-icons/fa';

const SelectedClass = () => {
    const [classes, refetch] = useClasses()
    console.log(classes)

    const handleDelete = classItem => {
        fetch(`https://photogenius-server.vercel.app/all-classes/${classItem._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0 ){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'your selected class deleted ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



    return (

        <>
        <div>
            <h2 className='text-4xl py-10'> Selected Classes  {classes?.length}</h2>
        </div>
                <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/*    head    */}
                    <thead >
                    <tr className="bg-[#de3a3a]">
                        <th> # </th>
                        <th>className</th>
                        <th>price</th>
                        <th>instructor </th> 
                        <th>Pay Now </th> 
                        <th>Action </th>
                    </tr>
                    </thead>
                    <tbody>



                    {/*        row 1         */}

                   


                    {
                        classes.map((classItem,index) =>
                       <>
                        <tr key={classItem._id}>
                        <th>{index + 1}</th>
                        <td className="pr-10">{classItem.className}</td>
                        <td className="pr-10">{classItem.price}</td>
                        <td className="pr-10">{classItem.instructor}</td>
                        <td className="pr-10"> panding </td>
                        <td>
                            <button onClick={() =>  handleDelete(classItem)} className="btn bg-red-600"><FaRegTrashAlt></FaRegTrashAlt> </button>
                        </td>
                    </tr>
                    </>
                    )
                    }
                    
                   
                    </tbody>
                </table>
                </div></>
    );
};

export default SelectedClass;