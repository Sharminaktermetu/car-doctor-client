import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img,title,price,_id}=service
    return (
        <div className="card card-compact bg-base-100 shadow-xl gap-5 w-11/12 mb-7">
        <figure><img src={img}alt="Shoes" /></figure>
        <div className="card-body">
          <p>{title}</p>
          <div className="card-actions justify-end">
          <p className='text-red-500 font-bold'>Price:${price}</p>

          <Link to={`/checkout/${_id}`}>
          <FaArrowRight className='text-red-500'/>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;