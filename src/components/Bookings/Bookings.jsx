import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Booking from '../Booking/Booking';

const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])
    
    const url= `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setBookings(data))
    },[])

    const handleDelete=(id)=>{
      const procedd =confirm('Are you sure?')
       if(procedd){
        fetch(`http://localhost:5000/bookings/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
          if(data.deletedCount>0){
            alert('Service deleted')
            const remaining =bookings.filter(booking=>booking._id !== id)
            setBookings(remaining)
          }
        })
       }
    }


  const handleConfirm=(id)=>{
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({status:'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.modifiedCount>0) {
          const remaining =bookings.filter(booking=>booking._id !== id)
          const updated =bookings.find(booking=>booking._id === id)
          updated.status='confirm'
          const newBookings = [updated,...remaining];
          setBookings(newBookings)
        }
      })
  }

    return (
        <div className="overflow-x-auto">
            <h1>{bookings.length}</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service</th>
        <th>Price</th>
        <th>Service Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    

    {bookings.map(booking=><Booking 
    key={booking._id}
    booking={booking}
    handleDelete={handleDelete}
    handleConfirm={handleConfirm}
    >

      </Booking>)}
    </tbody>

    
  </table>
</div>
    );
};

export default Bookings;