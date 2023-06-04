import React, { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loading} =useContext(AuthContext);

    if(loading){
    return (<div className='w-full m-auto text-center'>
         <span className="loading loading-ring loading-lg"></span>
    </div>);
    }
    if(user?.email){
        return children;
    }

    return  <Navigate to="/login" replace></Navigate>
};

export default Private;