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
    

    {bookings.map(booking=><Booking key={booking._id} booking={booking}></Booking>)}
    </tbody>

    
  </table>
</div>
    );
};

export default Bookings;