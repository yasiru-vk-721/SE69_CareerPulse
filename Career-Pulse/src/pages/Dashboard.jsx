import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

export default function Dashboard() {

    const {user} = useContext(UserContext);
    return(
        <div className='mt-20 mb-50 bg-slate-500 min-h-56 w-full justify-center items-center flex flex-col' >
            <h1>Dashboard</h1>
            {!!user && (<h2>Welcome {user.firstName}</h2>)}
        </div>
    )
}