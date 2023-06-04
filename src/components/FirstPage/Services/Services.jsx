import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-2xl text-red-600 font-bold'>Services</h2>
                <h3 className='text-3xl font-semibold'>Our Service Area</h3>
                <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

         <div className='grid grid-cols-3 mt-11'>
         {services.map(service=><Service 
            key={service._id}
            service={service}
            ></Service>)}
         </div>
            
        </div>
    );
};

export default Services;