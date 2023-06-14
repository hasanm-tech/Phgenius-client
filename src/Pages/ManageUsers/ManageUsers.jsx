import { useEffect, useState } from "react";


const ManageUsers = () => {

    const [users, setUsers] = useState([])
    useEffect(()  => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <>
        <div>
          <h2 className="text-4xl py-10">All Users  {users?.length}</h2>
        </div>
        <div className="overflow-x-auto ">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-[#de3a3a]">
                <th>#</th>
                <th>Name </th>
                <th>Email</th>
                <th>status</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td className="pr-10">{user.name}</td>
                  <td className="pr-10">{user.email}</td>
                  <td className="pr-10">
                    <button className="btn btn-xs">make Admin</button>
                  </td>
                  <td className="pr-10">
                    <button className="btn btn-xs">make Instructor</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default ManageUsers;