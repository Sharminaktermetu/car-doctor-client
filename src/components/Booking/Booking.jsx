import React from 'react';

const Booking = ({ booking, handleDelete,handleConfirm}) => {
  const { img, first, phone, email, title, price, _id,status } = booking;

  return (

    <tr>
      <th>
        <button className="btn btn-circle btn-outline btn-sm" onClick={() => handleDelete(_id)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-xl w-24">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold">{first}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {price}
      </td>
      <td>{title}</td>
      <th>
      {
        status =='confirm' ? <span className='font-bold text-success'>Confirmed</span>: <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
        
      }
      </th>
    </tr>

  );
};

export default Booking;