import useAddClasses from "../../Hooks/useAddClasses";


const MyClasses = () => {
    const [addClasses] = useAddClasses()
    return (
        <>
        <div>

        <p className="text-xl text-red-700 pb-4"> after added your classes from instructor panel (add a class) you can see those classes at manage classes</p>
            <h2 className="text-4xl py-10"> My Classes {addClasses?.length}</h2>

            

        </div>
                <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/*    head    */}
                    <thead >
                    <tr className="bg-[#de3a3a]">
                        <th> # </th>
                        <th>className</th>
                        <th>class image</th>
                        <th>instructor </th> 
                        <th>price  </th> 
                        <th>available seat  </th>
                        <th>Enrolled Students  </th>
                        <th> status  </th> 
                        <th> Feedback  </th> 
                        <th> Update  </th> 
                        
                        
                    </tr>
                    </thead>
                    <tbody>



                    {/*        row 1         */}

                   


                    {
                        addClasses.map((classItem,index) =>
                       <>
                        <tr key={classItem._id}>
                        <th>{index + 1}</th>
                        <td className="pr-10">{classItem.name}</td>
                        <td className="pr-10">
                            <img src={classItem.img} alt="" className="w-10 object-cover" />
                        </td>
                        <td className="pr-10">{classItem.instructor}</td>
                        <td className="pr-10">{classItem.price}</td>
                        <td className="pr-10">{classItem.seats}</td>
                        <td className="pr-10">0</td>
                        <td className="pr-10">pending</td>
                        <td className="pr-10"> pending </td>
                        <td className="pr-10"> <button>Update</button> </td>
                    </tr>
                    </>
                    )
                    }
                    
                   
                    </tbody>
                </table>
                </div></>

    );
};

export default MyClasses;