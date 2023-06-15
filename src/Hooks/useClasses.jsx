import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from './../Provider/AuthProvider';
const useClasses = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    const {data : classes = [] , refetch } = useQuery({

        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://photogenius-server.vercel.app/all-classes?email=${user?.email}`)
            return res.json()
          },
    })
    return [classes,refetch]
};

export default useClasses;
