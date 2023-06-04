import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Checkout = () => {
    const checkOutItem =useLoaderData()
    const {title,_id,service_id,price,img}=checkOutItem;
    const {user}=useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form =e.target;
        const first=form.first.value;
        const last=form.last.value;
        const phone=form.phone.value;
        const email=form.email.value;

        console.log(first,last,phone,email);
        const customerDetails ={
          first,
          last,
          phone,
          email,
          service:_id,
          price,
          title,
          img

        }
        console.log(customerDetails);

        fetch('http://localhost:5000/bookings',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(customerDetails)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          form.reset()
        })








      };
    return (
        <div>
             <form onSubmit={handleSubmit} className="w-full mx-auto py-14">
     <div className='grid grid-cols-2 gap-6'>
     <div className="mb-4">

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="first"
          type='text'
          required
          placeholder='First name'
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="last"
          type='text'
          required
          placeholder='Last name'
        />
      </div>
      <div className="mb-4">

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="phone"
          type='tel'
          required
          placeholder='Phone'
        />
      </div>
      <div className="mb-4">

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          required
          type='email'
          placeholder='Email'
          defaultValue={user?.email}
        />
      </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textarea">
          Textarea
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="textarea"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-error text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-full"
          type="submit"
        >
          Submit
        </button>
      </div>
   
    </form>
        </div>
    );
};

export default Checkout;<p>this is check out</p>