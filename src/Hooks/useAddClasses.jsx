import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const useAddClasses = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    const {data : addClasses = [] , refetch } = useQuery({

        queryKey: ['addClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://photogenius-server.vercel.app/add-classes?email=${user?.email}`)
            return res.json()
          },
    })
    return [addClasses,refetch]
};

export default useAddClasses;
